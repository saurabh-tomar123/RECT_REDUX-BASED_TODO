import { createSlice, } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState= {
  data:null,
  products:null,
  isloding:false,
  singleProduct:null,
  ADDTOCART:[],
  itemCount:null,
  loginData:null,
  localStore:null
}
export const countApiSlice = createSlice({
  name: "products",
  initialState,
  reducers:{
    getProducts:(state,action)=>{
      state.products=action.payload
    },
    getSingleProduct:(state,action)=>{
      state.singleProduct=action.payload
    },
    addToCart:(state,action)=>{
      const repeateddata=state.ADDTOCART.find((item)=>item.id === action.payload.id)
      if(!repeateddata)
      {
        const tempdata=[...state.ADDTOCART,action.payload]
        state.itemCount +=1;
        state.ADDTOCART=tempdata
      }
    },
    removeToCart:(state,action)=>{
      state.ADDTOCART = state.ADDTOCART.filter((item) => item.id !== action.payload.id ) 
      state.itemCount =state.ADDTOCART.length
      
    },
    login:(state,action)=>{
      state.loginData=action.payload
      // localStorage.setItem('login1',action.payload)
    },
    logout:(state,action)=>{
      state.loginData=null

    }


  }
})
 

export const {getProducts,getSingleProduct,addToCart,login,logout,removeToCart}=countApiSlice.actions
export const addCartItem=(data,increase)=>(dispatch)=>{
dispatch(addToCart({...data,quantity:increase}))
}
export const removeCartItem=(data)=>(dispatch)=>{
  dispatch(removeToCart(data))
  }

  
  export const fetchTodos=()=>async(dispatch)=>{
    const response=await fetch("https://fakestoreapi.com/products")
    const data=await response.json();
      dispatch(getProducts(data))
  
  }

  export const singleProducts=(id)=>async(dispatch)=>{

    try{
      // localStorage.setItem("id",JSON.stringify(id))
      const response=await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(getSingleProduct(response.data))
    }catch(error)
    {
      console.log(error)
    }
   
  }
  export const loginApi=(loginData)=>async(dispatch)=>{
    
    try{
        let data={ username: 'kminchelle',password: '0lelplR'}  
        const response=await axios.post(`https://dummyjson.com/auth/login`,data);
        console.log(response.data)
        dispatch(login(response.data))
        
        // localStorage.setItem("login1",JSON.stringify( response.data)  )
      }    
     
    catch(error)
    {
      console.log(error)
    }
   
  }
  

  // export const { } = countApiSlice.actions;

  export default countApiSlice.reducer;
 
  
 