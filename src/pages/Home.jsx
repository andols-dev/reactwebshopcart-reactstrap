import React,{useState, useEffect} from 'react'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import {  Row, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';

const Home = ({toastIsShown,products,addProductToCart}) => {
  return (
    <>
    {
      toastIsShown && (<div className="p-3 my-2 rounded" style={{ top:"0", right: "0", position: "fixed",zIndex:"1" }} >
        <Toast>
          <ToastHeader>
            You have added item to cart
          </ToastHeader>
          
        </Toast>
      </div>)
    }
    
   <Seo title="Home"/>
    <Row xs="1" sm="2" md="4">
    {
      products.map(product => (
        <ProductCard product={product} addProductToCart={addProductToCart}/>
      ))
    }
      
    </Row>
  </>
  )
}


export default Home