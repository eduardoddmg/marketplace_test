import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Carrinho from './pages/Carrinho';
import Descricao from './pages/Descricao';
import Erro from './pages/Erro';
import Home from './pages/Home';

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


const Rotas = () => {

  const [data, setData] = useState<api[]>([]);
  const [total, setTotal] = useState<number>(0)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => {
      for(let i of json) i.quantidade = 0;
      setData(json)
    });

  }, []);

  return (
    <>
    <Navbar data={data} setData={setData} total={total} setTotal={setTotal}/>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} total={total} setTotal={setTotal} />} />
        <Route path="/carrinho" element={<Carrinho data={data} setData={setData} total={total} setTotal={setTotal} />} />
        <Route path="/descricao/:id" element={<Descricao data={data} setData={setData} total={total} setTotal={setTotal} />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </>
  )
}

export default Rotas