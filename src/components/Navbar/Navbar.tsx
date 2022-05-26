import { useState, useEffect, Dispatch, FunctionComponent, SetStateAction } from 'react'
import './navbar.css';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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

const Navbar:FunctionComponent<IProps> = ({ data, setData, total, setTotal }) => {

  return (
    <nav>
      <section className="nav_header">
        <Link to="/">Loja</Link>
      </section>
      <Link to="/carrinho" className="nav_carrinho">
        <Link to="/carrinho"><BsFillCartFill className="icon_cart" /></Link>
        <p>{total}</p>
      </Link>
    </nav>
  );
}

export default Navbar