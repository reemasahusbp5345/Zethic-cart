import React from 'react'
import { Link } from 'react-router-dom'
import "../css/product.css"

const Product = ({imageUrl,name,price,description,_id}) => {
    return (
        <div className="product">
            <img src={imageUrl} alt={name}/>

            <div className="product_info">
                <p className="info_name">{name}</p>
                <p className="info_description">{description.substring(0,100)}...</p>
                <p className="info_price">₹{price}</p>
                <Link to={`/products/${_id}`}  className="info_button" >View</Link>
            </div>  
        </div>
    )
}

export default Product
