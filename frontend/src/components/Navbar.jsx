import React from 'react'
import "../css/navbar.css"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const Navbar = ({click}) => {
    const cart=useSelector(state=>state.cart.cartItems)

    const getCartCount=()=>{
        return cart.reduce((qty,item)=>Number(item.qty)+qty,0)
    }
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <h2>Zethic-Mern-Cart</h2>
            </div>

            <ul className="navbar_links">
                <li>
                    <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                        Cart
                        <span className="cart_badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>

            <div className="hamburger_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
