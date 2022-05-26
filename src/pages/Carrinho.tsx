import CarrinhoComponent from "../components/Carrinho/CarrinhoComponent"
import React, {Dispatch, FunctionComponent, SetStateAction} from 'react'

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

const Carrinho:FunctionComponent<IProps> = ({ data, setData, total, setTotal}) => {
  return (
    <>
        <CarrinhoComponent data={data} setData={setData} total={total} setTotal={setTotal} />
    </>
  )
}

export default Carrinho