import { createSlice } from "@reduxjs/toolkit";
export const countSlice = createSlice({
  name: "counter2",
  initialState: {
    countVal: 0,
    Name: [],
    ARR: [],
    data:null,
    isloding:false,
    id:null
    
  },

  reducers: {
    countData: (state) => {
      state.countVal += 1;
    },
    countData2: (state) => {
      state.countVal -= 1;
    },
    naming:(state, action)=> {
      state.Name[0] = action.payload;
    },
    apiData:(state,action)=>{
      console.log(action.payload)
      state.ARR=action.payload

    },
    productId:(state,action)=>{
      console.log(action.payload)
      state.id=action.payload;
      }
    
  },
});
export const { countData, countData2, naming,apiData,extraReducers,productId } = countSlice.actions;
export function updatedCount(counter) {
  return function (dispatch) {
    dispatch(countData(counter));
  };
}
export function updateName(data) {
  return function (dispatch) {
    dispatch(naming(data));
  };
}
export function callApiData(data)
{
  return function (dispatch)
  {
    dispatch(apiData(data))
  }
}
export function getPRoductId(data)
{
  return function (dispatch)
  {
    dispatch(productId(data))
  }
}
export default countSlice.reducer;

