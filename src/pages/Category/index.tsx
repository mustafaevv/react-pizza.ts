import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/Product'

const Category = () => {
  const {type} = useParams()
  const [data, setData] = useState(null)
  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await fetch(`http://localhost:4000/pizzas?category=${type}`)
      const cards = await data.json()
      setData(cards)
    }
    fetchData()
  },[type])
  return (
    <div>
      {data && data.map((card:Object,i:number)=> (
        <Product key={i} data={card}/>
      ))}
    </div>
  )
}

export default Category