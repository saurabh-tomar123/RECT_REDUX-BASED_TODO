import React, {useState, useEffect } from 'react'
// import React,{useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import {addCartItem,singleProducts} from '../redux/Reduicer3'
import { Button } from 'react-bootstrap';


export const SingleProduct = () => {
    const dispatch=useDispatch()
    const Navigate=useNavigate()
  
  const count = useSelector((state) => state.reducer.CountApi.itemCount); 
  const apiData = useSelector((state) => state.reducer.CountApi.singleProduct);//singleProduct 
  const [increase,setIncrease]=useState(1)
const addItem=()=>{
   
        dispatch(addCartItem(apiData,increase))
}
const increaseQuantity=()=>{
 setIncrease(increase+1)
}
const decreaseQuantity=()=>{
    setIncrease(increase-1)
   }
  return (
    <div className='blur'>
      <div style={{width: "5% !important",display: "flex"}}>
       <NavLink to='/addtocart'> <img style={{width:"50px",marginRight:"20px",display:"flex"}} src="https://e7.pngegg.com/pngimages/772/45/png-clipart-shopping-cart-shopping-centre-icon-shopping-cart-text-retail-thumbnail.png" /> 
       <button style={{position: "absolute",left: "10px" ,top: "10px",fontWeight:"bold",color:"red",fontSize:"20px"}}>{count}</button>
       </NavLink>
       </div>
  <div> 
{ 
apiData &&
    <div style={{backgroundColor:"white",padding:"10px",width:"20%",display:"inline-block",border:"2px solid red",borderRadius:"20px"}}>
   
   <img  src={apiData.image} style={{maxWidth:"100%",width:"200px"}} /><br/>
   <span>{apiData.id}</span><br/>
   <span>{apiData.category}</span><br/>
   {/* <span>{item.description}</span> */}
   <span>{apiData.title}</span><br/>
   <span>{apiData.price}</span><br/><br/>
    <Button variant="primary" style={{marginRight: "10px"}} onClick={()=>addItem()}>AddToCart</Button>
    <Button  variant="primary" style={{marginRight: "10px"}} onClick={increaseQuantity}>+</Button><span>{increase}</span> <Button variant="primary" style={{marginLeft: "10px"}} onClick={decreaseQuantity}> - </Button>
  </div>
  }
  </div>     

    </div>
  )
}
