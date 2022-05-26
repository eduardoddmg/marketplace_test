import React, { Dispatch, SetStateAction, FunctionComponent, useEffect } from 'react';
import './products.css';
import { Link } from 'react-router-dom';
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

const Products:FunctionComponent<IProps> = ({ data, setData, total, setTotal }) => {


  return (
    <section className='products'>
      {data && data.map((value, index) => {
        console.log(value);
        return (
          <article key={index} className="card_product">
            <img src={value.image} alt="" />
            <h3>{value.title}</h3>
            <h5  style={{margin: '2vh 0', fontWeight: 'bold'}}>R$ {value.price}</h5>
            <section className="btn_group">
              <button className='btn_add' onClick={() => {
                value.quantidade++;
                setTotal(data.reduce((sum, val) => sum+val.quantidade, 0));
              }}>comprar</button>
              <Link className='btn_details' to={`/descricao/${value.id}`}>details</Link>
            </section>
          </article>
        )
      })}
      {data.length === 0 && <CircularProgress style={{marginTop: '10vh'}} />}
    </section>
  )
}

export default Products