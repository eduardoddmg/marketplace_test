import React, {Dispatch, FunctionComponent, SetStateAction, useState, useEffect} from 'react';
import './carrinho.css';
import { Link } from 'react-router-dom';
import ModalCarrinho from './ModalCarrinho/ModalCarrinho';
import CircularProgress from '@mui/material/CircularProgress';

interface api{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: object;
    quantidade: number;
}

interface IProps {
    data: api[];
    setData: Dispatch<SetStateAction<api[]>>;
    total: number;
  setTotal: Dispatch<SetStateAction<number>>;
}


const CarrinhoComponent:FunctionComponent<IProps> = ({ data, setData, total, setTotal }) => {

    const [quantidade, setQuantidade] = useState<boolean>(false);
    const [open, setOpen] = React.useState(false);

    const calcularTotal = () => {
        let total:number = 0;
        for (let i of data)
        {
            total+=i.price*i.quantidade;
        }
        return total;
    }

    useEffect(() => setTotal(data.reduce((sum, val) => sum+val.quantidade, 0)))

    return (
        <>
      <section className="products">
          {data.length === 0 && <CircularProgress style={{margin: '10vh auto'}} />}
          {data && data.filter(value => value.quantidade > 0).map((value, index) => {
              return (
                <article key={index} className="card_product">
                    <img src={value.image} alt="" />
                    <h3>{value.title}</h3>
                    <h5>{value.price}</h5>
                    <h5>Quantidade: {value.quantidade}</h5>
                    <section className="container_btn">
                        <button className="btn_add" onClick={() => {
                           value.quantidade++;
                           setQuantidade(!quantidade)
                        }}>adicionar</button>
                        <button className="btn_remove" onClick={() => {
                        value.quantidade--;
                        setQuantidade(!quantidade)
                    }}>remover</button>
                        <button className="btn_remove" onClick={() => {
                            value.quantidade = 0;
                            setQuantidade(!quantidade)
                        }}>remover tudo</button>
                    </section>
              </article>
              )
            })}
          {data.filter(value => value.quantidade > 0).length === 0 && 
          <section className='container_message_carrinho'>
              <h2 style={{padding: '4vh 0'}}>Não há nenhum item no carrinho</h2>
              <Link to="/" className='btn_back_carrinho'>Voltar para a loja</Link>
          </section>
          }
          
      </section>
      <section className="container_finalizar_compra">
          {data.filter(value => value.quantidade > 0).length > 0 && 
          <section className="container_finalizar_compra_final">
            <button className="btn_delete_tudo" onClick={() => {
                for (let i of data) i.quantidade = 0;
                setQuantidade(!quantidade);
            }}>Remover tudo</button>
            <h2>TOTAL: R${Math.round(calcularTotal())}</h2>
            <button className="btn_finalizar_compra" onClick={() => {
                setOpen(true)
                for (let i of data) i.quantidade = 0;
            }}>Finalizar compra</button>
          </section>
    }
      </section>
      {open && <ModalCarrinho open={open} setOpen={setOpen} />}
        </>
    )
}
  
export default CarrinhoComponent