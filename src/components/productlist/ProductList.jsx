import Product from '../product/Product';
import { products } from '../../data';
import React from 'react'
import './productlist.css'
const ProductList = () => {
    return (
        <div className="p1">
            <div className="p1-texts">
             <h1 className="p1-title">Create & Inspires.It's Zahid</h1>
             <p className="p1-desc">
                 It's a creative portfolio website of using beautiful design.
                 This is developed using Reactjs which is highly flexiable 
                 and recommendable. 
             </p>
            </div>
            <div className="p1-list">
            
              {products.map((item) =>(
                <Product key={item.id} img={item.img} link={item.link} />
              ))}  
              </div>
        </div>
    )
}

export default ProductList;
