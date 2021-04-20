import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import "../css/CartPage.css"
import { addToCart, removeFromCart } from '../redux/action/cartAction'

const CartPage = (props) => {
    const dispatch=useDispatch()
    const cart=useSelector(state=>state.cart);
    const  {cartItems}=cart
    
    const addQty=(id,qty)=>{
        dispatch(addToCart(id,qty))
    }

    const removeCart=(id)=>{
        dispatch(removeFromCart(id))
    }

    const getCartCount=()=>{
        return cartItems.reduce((qty,item)=>Number(item.qty)+qty,0)
    }

    const getCartSubtotal=()=>{
        return cartItems.reduce((price,item)=>(item.price*item.qty)+price,0)
    }
    return (
        <div className="cartpage">
            <div className="cartpage_left">
                <h2>Shopping Cart</h2>
                 {cartItems.length===0?(<div>Your Cart is empty <Link to="/">Go Back</Link></div>):cartItems.map(item=><CartItem key={item.product} {...item} addQty={addQty} removeCart={removeCart}/>)}
            </div>
            <div className="cartpage_right">
                <div className="cartpage_info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>₹{getCartSubtotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartPage
