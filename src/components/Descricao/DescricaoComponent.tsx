import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { useParams, Link } from 'react-router-dom';
import './descricao.css';
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

const DescricaoComponent:FunctionComponent<IProps> = ({ data, setData, total, setTotal }) => {
  let params = useParams() as any;

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {data.length === 0 && <CircularProgress style={{margin: '10vh auto'}} />}
    </div>
    {data.filter(value => value.id === parseInt(params.id)).map((value, index) => {
        return(
            <article className='container_descricao' key={index}>
              <section className="container_descricao_img">
                <img src={value.image} alt="imagem do produto" />
              </section>
              <section className="container_descricao_text">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <p style={{margin: '2vh 0', fontWeight: 'bold'}}>R${value.price}</p>
                <section className="container_descricao_btns">
                  <button className='btn_add_descricao' onClick={() => {
                    value.quantidade++;
                    setTotal(data.reduce((sum, val) => sum+val.quantidade, 0));
                    }}>Comprar</button>
                  <Link to ="/" className="btn_back">Voltar pra loja</Link>
                </section>
              </section>
            </article>
          )
    })}
    </>
  )
}

export default DescricaoComponent