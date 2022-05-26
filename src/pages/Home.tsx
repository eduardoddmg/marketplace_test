import React, { Dispatch, SetStateAction, FunctionComponent } from 'react'
import Products from '../components/Products/Products'

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

const Home:FunctionComponent<IProps> = ({data, setData, total, setTotal}) => {
  return (
    <>
        <Products data={data} setData={setData} total={total} setTotal={setTotal} />
    </>
  )
}

export default Home