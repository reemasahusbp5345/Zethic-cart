import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import "../css/HomePage.css"
import { getProducts } from '../redux/action/productAction'

const HomePage = (props) => {
    const dispatch=useDispatch()
    const listProducts=useSelector(state=>state.getProducts)
    const {products,loading,error}=listProducts;
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return (
        <div className="homepage">
            <div className="homepage_products">
                 {loading ? <h2>...Loading</h2> : error? <h2>{error}</h2>:(products.map((product)=><Product key={product._id} {...product}/>))}
            </div>
        </div>
    )
}

export default HomePage
