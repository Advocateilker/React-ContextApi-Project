import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Loading from '../Components/Loading';


const MainPage = () => {

    const [products,setProducts]=useState(null)

    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((res)=> setProducts(res.data.products))

    },[])

  return (
    <div className='container d-flex gap-3 justify-content-center justify-content-md-between flex-wrap'>
        {products ? products.map((product)=> <Card key={product.id} product={product} />) : <Loading/>  }

    </div>


  )
}

export default MainPage