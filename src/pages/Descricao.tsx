import React, { Dispatch, SetStateAction, FunctionComponent} from 'react'
import DescricaoComponent from '../components/Descricao/DescricaoComponent'

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

const Descricao:FunctionComponent<IProps> = ({ data, setData, total, setTotal }) => {
  return (
    <div>
        <DescricaoComponent data={data} setData={setData} total={total} setTotal={setTotal} />
    </div>
  )
}

export default Descricao