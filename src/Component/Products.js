import React,{useEffect,useState} from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {fetchTodos,singleProducts} from "../redux/Reduicer3";
import { NavLink, useNavigate } from 'react-router-dom';
import { SingleProduct } from './SingleProduct';
import { Button } from 'react-bootstrap';


export const Products = () => {
    const Navigate=useNavigate()
    const dispatch = useDispatch();
    const [count2,setCount2]=useState(false)
    const [search,setsearch]=useState(false)
    var [searchItem,setSearchItem]= useState([])
  const count = useSelector((state) => state.reducer.CountApi.itemCount); 
  const apiData = useSelector((state) => state.reducer.CountApi.products);
   
    
  
useEffect(()=>{
    dispatch(fetchTodos());
},[])

  const fetchingProducts=(item)=>{
      
      dispatch(singleProducts(item.id))
    // Navigate(`/products/${item.id}`)
    setCount2(true)
  
  }
  const closeBtn=()=>{
    let data11=[]
    setCount2(false)
    dispatch(singleProducts(data11))
  }
  const filterData=(e)=>{
    setsearch(true)
   let data= apiData.filter((item)=> item.title.toLowerCase().includes(e.target.value.toLowerCase()) || item.price == (e.target.value))
  
   console.log(data)
   setSearchItem(data)
}
  return (
    <div sttyle={{overflow: "hidden"}}>
      <NavLink to='/addtocart'> <img style={{width:"50px",marginRight:"20px",display:"flex"}} src="https://e7.pngegg.com/pngimages/772/45/png-clipart-shopping-cart-shopping-centre-icon-shopping-cart-text-retail-thumbnail.png" /> 
       <button style={{position: "absolute",left: "10px" ,top: "10px",fontWeight:"bold",color:"red",fontSize:"20px"}}>{count}</button>
       </NavLink>
       <div><input type='search' style={{border:"2px solid red",height:"60px",borderRadius:"20px",textAlign:"center"}} placeholder='search here...' onChange={(e)=>filterData(e)}/>
       </div>
    <div style={{flexWrap:"wrap",display:"flex",justifyContent: "center",flexDirection:"flex-start" }}>
    {/* {count2 ? <><SingleProduct/><button className='close' onClick={()=>setCount2(false)}>Close</button></> : null} */}

    
        {/* <span>{JSON.stringify(apiData)}</span> */}
        {/* <img src={apiData[0].image}></img> */}
        {/* {status?<button onClick={fetchingProducts}>AllProducts</button>:""} */}
       
     
         {(search===false && apiData)?
         apiData.map((item,i)=>

       <div style={{padding:"10px",margin:"10px",width:"20%",height:"500px",display:"inline-block",backgroundColor:"",border:"2px solid red",borderRadius:"20px"}} onClick={()=>fetchingProducts(item)} key={i}>
   
        <img  src={item.image} style={{maxWidth:"100%",width:"200px"}} /><br/>
        <span>{item.id}</span><br/>
        <span>{item.category}</span><br/>
        {/* <span>{item.description}</span> */}
        <span>{item.title}</span><br/>
        <span>{item.price}</span>

       </div>
        ):searchItem.map((item,i)=>

        <div style={{padding:"10px",margin:"10px",width:"20%",height:"500px",display:"inline-block",backgroundColor:"",border:"2px solid red",borderRadius:"20px"}} onClick={()=>fetchingProducts(item)} key={i}>
    
         <img  src={item.image} style={{maxWidth:"100%",width:"200px"}} /><br/>
         <span>{item.id}</span><br/>
         <span>{item.category}</span><br/>
         {/* <span>{item.description}</span> */}
         <span>{item.title}</span><br/>
         <span>{item.price}</span>
 
        </div>
         )
      }
      

    </div>
   {count2 ? <><SingleProduct/><Button  variant="outline-danger" className='close' onClick={()=>closeBtn()}>Close</Button></> : null}
    </div>
  )
}
