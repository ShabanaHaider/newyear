"use client"
import React,{useContext} from 'react'
import { CartContext } from './context'

const Cart = () => {
    const obj = useContext(CartContext)
    // const arr=[
    //     {name:"Tops",id:1},
    //     {name:"Pants",id:2},
    //     {name:"T-shirts",id:3},
    // ]
  return (
    <div className="ml-10">        
        <h1 className="text-left ml-10 mb-4">Cart</h1>
        <ol>
            {obj.cart[0] &&
            obj.cart.map((val:any, i:number) =>{
                return(
                    <li key={i}>
                   <span className="mr-5">{val.id}</span> {val.name}<span className="ml-5" onClick={()=>obj.del(val.id)}>delete to cart</span>
                    </li>
                );
             }) }
        </ol>

    </div>
  )
}
export default Cart
