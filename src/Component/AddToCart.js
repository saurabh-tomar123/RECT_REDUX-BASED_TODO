import React,{useState} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {removeCartItem} from '../redux/Reduicer3'
import { Button } from 'react-bootstrap';


export const AddToCart = () => {
  const dispatch=useDispatch()
    const apiData = useSelector((state) => state.reducer.CountApi.ADDTOCART); 
    const [status,setStatus]=useState(false)
    const [count,setCount]=useState(false)
    const [data,setData]=useState({state:"",street:'',landmark:"",pincode:"",mobile:""})
    const [formErr,setformErr]=useState({})
    
    const removeProduct=(item)=>
    {
     
      dispatch(removeCartItem(item))
     
    }

    const buySteps=()=>{
      setStatus(!status)
    }
const userDetails=(e)=>{
  let err={}
  setData({...data,[e.target.name]:e.target.value})
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!regex.test(data.state)){
    setCount(true)
    err.state='invalid email'
    setformErr( err)
}

// else if(data.state === '' || null  ){
//   err.state="Required"
//   setformErr( err)
// }

else{
  // setCount(true)
  err.state=""
  setformErr(err)
  setCount(false)
}
}
const getData=(e)=>{
  e.preventDefault()
  alert("data submitted successfully")
  setData({state:"",street:'',landmark:"",pincode:"",mobile:""})

  console.log(data)
}
const cancelData=()=>{
  setData({state:"",street:'',landmark:"",pincode:"",mobile:""})
  setStatus(false)
}



  return (
    <div >
      <div style={{flexWrap:"wrap",display:"flex",justifyContent: "center"}}>
{ 
apiData && apiData.map((item,i)=>

    <div key={i}  style={{margin:"10px",width:"80%",height:"150px",display:"flex",justifyContent: "space-around",backgroundColor:"",border:"2px solid red",borderRadius:"20px"}}>
  <div>
  <img  src={item.image} style={{maxWidth:"100%",width:"66px",display:"flex",marginTop:"38px"}} /><br/>
  </div>
   {/* <img  src={item.image} style={{width:"50px",display:"flex",margin:"10px"}} /><br/> */}
   {/* <span>{item.id}</span><br/> */}
   {/* <span>{item.category}</span><br/> */}
   {/* <span>{item.description}</span> */}
   {/* <span>{item.title}</span><br/> */}
   <div style={{ marginTop: "57px"}}>
   <span style={{marginTop: "43px"}}>Calulated Price : {item.quantity * item.price}</span><br/><br/>
   </div>
   <div style={{marginTop:"57px"}}>
   Quantity : {item.quantity}
   </div>
    <Button  variant="primary" style={{height: "50px",marginTop: "43px"}} onClick={buySteps}>Buy Now</Button>  <Button variant="danger" style={{height: "50px",marginTop: "43px",}} onClick={()=>removeProduct(item)}>removeToCart</Button>
  </div>
  )

  }
  </div>

 {status && <div  style={{padding:"10px",margin:"10px",width:"25%",height:"500px",display:"inline-block",backgroundColor:"",border:"2px solid red",borderRadius:"20px"}}>
  <form onSubmit={getData}>
  <input  className={count ? "email2" :'email'} type="text" placeholder='enter state' name="state" value={data.state} onChange={(e)=>userDetails(e)}/>{data&& <span>{formErr.state}</span>}<br/><br/>
  <input style={{height:"50px",borderRadius:"15px",width:"300px",textAlign:'center',maxWidth:"100%"}} type="text" placeholder='enter street' name="street" value={data.street} onChange={(e)=>userDetails(e)} /><br/><br/>
  <input style={{height:"50px",borderRadius:"15px",width:"300px",textAlign:'center',maxWidth:"100%"}} type="text" placeholder='enter landMark' name="landmark" value={data.landmark} onChange={(e)=>userDetails(e)} /><br/><br/>
  <input style={{height:"50px",borderRadius:"15px",width:"300px",textAlign:'center',maxWidth:"100%"}} type="number" placeholder='enter pincode' name="pincode" value={data.pincode} onChange={(e)=>userDetails(e)} /><br/><br/>
   <input style={{height:"50px",borderRadius:"15px",width:"300px",textAlign:'center',maxWidth:"100%"}} type="number" placeholder='enter mobile No' name="mobile" value={data.mobile} onChange={(e)=>userDetails(e)} /><br/><br/>

  <Button  type='submit' variant='primary' >submit</Button> <Button onClick={cancelData} variant="danger">cancel</Button>
  </form>


  </div>}
    </div>
  )
}
