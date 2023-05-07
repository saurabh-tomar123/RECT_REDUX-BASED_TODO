
import React,{useContext,lazy,wait,Suspense, useState} from 'react';
import './App.css';
import {Form} from "./Component/Form"
// import {CounterPage} from "./Component/CounterPage"
import {Route,Routes} from "react-router-dom"
import { Products } from './Component/Products';
import { SingleProduct } from './Component/SingleProduct';
import { AddToCart } from './Component/AddToCart';
import { Login } from './Component/Login';
import VerticalLinearStepper from './Component/MultiStep'
import { Practice } from './Component/Practice';
import Persist from './Component/Persist';



// const Form = lazy(()=>import('./Component/Form'));
// const  CounterPage =lazy(() => import('./Component/CounterPage')) ;
const USERTYPE={
  public:"user",
  normal:"normal",
  admin:"admin"
}
const type=USERTYPE.public

function App() { 
 
  
  

  return (
    <div className="App">
  
      {/* <Suspense fallback = { <div> Please Wait... </div> }> */}
      
     <Routes>
     <Route path="/" element={<div>  <Form/>  </div>}></Route>

      {/* <Route path="/user" element={<div>  <Form/>  </div>}></Route> */}
      <Route path="/products" element={<div>  <Products/>  </div>}></Route>
      <Route path="/products/:id" element={<div>  <SingleProduct/>  </div>}></Route>
      <Route path="/addtocart" element={<div>  <AddToCart/>  </div>}></Route>
      <Route path="/login" element={<div>  <Login/>  </div>}></Route>
      <Route path="/steps" element={<div>  <VerticalLinearStepper/>  </div>}></Route>
      <Route path="/practice" element={<div>  <Practice/>  </div>}></Route>
      <Route path="/persist" element={<div>  <Persist/>  </div>}></Route>
      <Route path="/normal" element={<div> <Normal/>  </div>}></Route>
    
     </Routes>
     {/* </Suspense> */}
      </div>
  );
}
function Normal()
{
  return <div>normal user....</div>
}
function  HideFromOther ({children}){
  if( type === USERTYPE.public  || type === USERTYPE.admin ){

    return <>{children}</>
  }
  else{
    return <div>you do not have access </div>
  }

}



export default App;
