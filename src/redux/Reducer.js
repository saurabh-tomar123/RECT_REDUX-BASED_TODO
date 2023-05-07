import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    formdata :[]
  },

  reducers: {
    getformdata: (state,action) => {
      state.formdata=[...state.formdata,action.payload]
    },
    getDataId: (state,action) => {
      console.log("====>",action.payload)
      const tempdata=[...state.formdata]
      tempdata[action.payload.id]={Name:action.payload.Name,Email:action.payload.Email,Mob:action.payload.Mob,Task:action.payload.Task}
      state.formdata=tempdata
    },

    deleteData: (state, action) => {
        state.formdata= state.formdata.filter((item,index) => index !==action.payload) 
    },

    deleteAll:(state)=>{
     
      state.formdata= []
    },
    setJsonData:(state,action)=>{
        let tempdata=[...state.formdata]
        action.payload.map((item,i)=>{
          tempdata[state.formdata.length+i]={Name:item.name,Email:item.email}
        })
      state.formdata=tempdata
    }
  }
});

export const { getDataId, deleteData, incrementByAmount ,getformdata,deleteAll,setJsonData} = counterSlice.actions;

export function formdatavalue(data){
    return function(dispatch){
        
       dispatch(getformdata(data))
    //    dispatch(getDataId(data))

    }
}
export function updateDataValue(data,id){
    return function(dispatch){
        
   
    dispatch(getDataId(data))

    }
}
export function dataDelete(id)
{
    return function(dispatch){
        
   
        dispatch(deleteData(id))
    
        }

}
export function deleteAllData()
{
    return function(dispatch){
        
   
        dispatch(deleteAll())
    
        }

}
export function callJson(json)
{
    return function(dispatch){
        
   
        dispatch(setJsonData(json))
    
        }

}

export default counterSlice.reducer;

