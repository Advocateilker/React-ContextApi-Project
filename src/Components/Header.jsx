import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BiSolidShoppingBags } from "react-icons/bi"

import { BasketContext } from '../Context/BasketContext'

const Header = () => {
  const { basket } = useContext(BasketContext)

  const total= basket.reduce((total,i)=> total + i.amount ,0)


  return (
    <header className="container p-3  rounded sticky-up my-2 bg-dark d-flex align-items-center justify-content-between">
      <Link className='bg-success rounded px-2' to={'/'}>CONTEXT-API</Link>
      <Link className="d-flex bg-dark  align-items-center gap-2" to={'/basket'}>
        <BiSolidShoppingBags className='bg-dark fs-2' />
        <span className='badge bg-warning p-2'>{total}</span>
      </Link>
    </header>
  )
}

export default Header