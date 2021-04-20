import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import "../css/ProductPage.css"
import { addToCart } from '../redux/action/cartAction'
import { getProductDetails } from '../redux/action/productAction'

const ProductPage = (props) => {
    const dispatch=useDispatch()
    const params=useParams()
     const id=params.id
 const history=useHistory()
    const [qty,setQty]=useState(1)
    const productDetails=useSelector(state=>state.getProductDetails);
    const {loading,error,product}=productDetails
    useEffect(()=>{
        if(product && id!==product._id){
            dispatch(getProductDetails(id))
        }
    },[dispatch,product,id])

    const addToCartHandler=()=>{
        dispatch(addToCart(product._id,qty));
        history.push("/cart")
    }
    return (
        <div className="productpage">
            {loading?<h2>Loading...</h2>:error?<h2>{error}</h2>:( <>
            <div className="productpage_left">
                <div className="left_image">
                    <img src={product.imageUrl} alt={product.name}/>
                </div> 

                <div className="left_info">
                    <p className="left_name">{product.name}</p>
                    <p>Price: ₹{product.price}</p>
                    <p>Description {product.description}</p>
                </div>
            </div>
            <div className="productpage_right">
                <div className="right_info">
                    <p>
                        Price: <span>₹{product.price}</span>
                    </p>
                    <p>
                        Qty
                        <select value={qty} onChange={e=>setQty(e.target.value)}>
                           { [1,2,3,4,5].map(item=><option value={item} key={item}>{item}</option>)}
                        </select>
                    </p>
                    <p>
                        <button onClick={addToCartHandler}>Add To Cart</button>
                    </p>
                </div>
            </div></>)}
        </div>
    )
}

export default ProductPage
