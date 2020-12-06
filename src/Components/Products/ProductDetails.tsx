import React from 'react';
import { useSelector } from 'react-redux';
import { ProductItem } from '../../store/state';
import { add, store } from '../../store/index';
import './ProductDetails.css';

export default function ProductDetails() {
    const products = useSelector((state: ProductItem[]) => state);
    const product = products.map((product, i) => {
        return (
            <>
            <div key={i} className='container card card-body'>
                <div className='setProducts'>
                <img className='img-fluid' src={product.src} alt={i.toString()} />
                <div className='text-left'>
                    <span className='text-left'> {product.name}</span>
                    <h4 className='setPrice'> $ {product.price}</h4>  
                </div>      
                <div className="text-right">
                {
                    (product) && 
                    <button 
                    onClick={() => store.dispatch(add(product))}
                    disabled={product.added}
                    className="btn btn-info btn-sm button">Add to basket</button>
                }                       
                </div>
                </div>
            </div>
            </>
        )
    })

    return (
        <>
        <div className="text-center mt-5 mb-5">
             <h3 style={{color: 'purple'}}>Shopping Basket</h3>
        </div>
        <div className='container'>          
            {product}
        </div>
        </>
    )
}