import React, { useContext } from 'react'
import { BasketContext } from '../Context/BasketContext'

const Card = ({ product }) => {

    const context = useContext(BasketContext)


    return (
        <div className='w-25 text-light p-2 bg-dark d-flex flex-column gap-2 justify-content-between object-fit-contain card private'>
            <h3 className='h-20 text-center'>{product.title}</h3>
            <img className='img-fluid rounded h-20' src={product.thumbnail} />
            <p>{product.description.slice(0, 50) + '...'}</p>
            <p className='text-success text-center fs-4'>${product.price}</p>
            <button onClick={()=>context.addToBasket(product)} className='btn btn-success'>Add to Basket</button>
        </div>
    )
}

export default Card