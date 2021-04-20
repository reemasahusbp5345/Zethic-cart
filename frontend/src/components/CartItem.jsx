import React from 'react'
import { Link } from 'react-router-dom'
import "../css/cartitem.css"

const CartItem = ({product,name,price,imageUrl,qty,addQty,removeCart}) => {
    return (
        <div className="cartitem">
            <div className="cartitem_image">
                <img src={imageUrl} alt={name}/>
            </div>

            <Link to={`/products/${product}`} className="cartitem_name">
                <p>{name}</p>
            </Link>

            <p className="cartitem_price">₹{price}</p>

            <select value={qty} onChange={e=>addQty(product,e.target.value)}>
                { [1,2,3,4,5].map(item=><option value={item} key={item}>{item}</option>)}
            </select>

            <button className="cartitem_deleteBtn" onClick={e=>removeCart(product)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem
