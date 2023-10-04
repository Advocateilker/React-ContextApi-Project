import React from 'react'
import { useContext } from 'react'
import { BasketContext } from '../Context/BasketContext'

const BasketPage = () => {
    const context = useContext(BasketContext)

    const total= context.basket.reduce((total,i)=> total + (i.amount * i.price) ,0)

    return (
        <div className='d-flex flex-column gap-3 container'>

            {context.basket.length === 0 && <h3 className='text-center my-5'>Please add several items to the cart</h3>}

            {context.basket.length > 0 && <h3 >TOPLAM: $ {total}</h3> }
            {context.basket?.map((i)=>(
                <div key={i.id} className='d-flex border justify-content-between align-items-center gap-1 p-3'>
                    <img width={100} height={100}src={i.thumbnail} className="object-fit-contain rounded" />
                    <h4>{i.title}</h4>
                    <h3 className='fs-4'>${i.price * i.amount}</h3>
                    <h6>Miktar: {i.amount}</h6>
                    <div className='btn-group'>
                        <button onClick={()=> context.addToBasket(i)} className='btn btn-primary'>+</button>
                        <button onClick={()=> context.removeFromBasket(i.id)}className='btn btn-danger'>-</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default BasketPage