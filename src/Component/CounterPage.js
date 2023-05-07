import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  countData2,
  countData,
  updateName,
  // callApiData,
} from "../redux/Reducer2";
import { setJsonData } from "../redux/Reducer";
// import { fetchTodos,allProducts } from "../redux/Reduicer3";

export const CounterPage = () => {
  const dispatch = useDispatch();
  const Navigate=useNavigate()
  const counter = useSelector((state) => state.reducer.countrr.countVal);
  const NAME = useSelector((state) => state.reducer.countrr.Name);
  // const ARR = useSelector((state) => state.countrr.ARR);
  // const apiData = useSelector((state) => state.CountApi.products);
  const [data, setdata] = useState({ name: "" });
  const [input, setInput] = useState({ name: "", salary: "", age: "", id: "" });

  // useEffect(()=>{
  //  dispatch(allProducts())
  // },[])

  const countAction = () => {
    dispatch(countData());
  };

  const countAction2 = () => {
    dispatch(countData2());
  };
  const updatingName = (e) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const sendingData = (e) => {
    e.preventDefault();
    dispatch(updateName(data));
  };

  const callApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((res) =>
      res.json().then((result) => {
        //  dispatch(callApiData(result))
        dispatch(setJsonData(result));
      })
    );
  };
  const callApi2 = () => {
    const data = {
      name: `${input.name}`,
      salary: `${input.salary}`,
      age: `${input.age}`,
      id: `${input.id}`,
    };
    fetch("	https://dummy.restapiexample.com/api/v1/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((result) => {
        //  dispatch(callApiData(result))
        console.log(result);
        alert(result.message);
      })
    );
  };
  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
 
  return (
    <div>
      <div
        style={{
          margin: "20px",
          height: "510px",
          width: "100%",
          backgroundColor: "silver",
          border: "2px solid red",
          borderRadius: "20px",
        }}
      >
        <h1>
          CounterPage:<span style={{ color: "red" }}>{counter}</span>
        </h1>
        {/* <span>{JSON.stringify(ARR)}</span> */}
        <button onClick={countAction}>Increament</button>
        <button onClick={countAction2}>Decreament</button>
        <br />
        <br />
        NAME
        <input
          type="text"
          value={input.name}
          name="name"
          onChange={(e) => changeHandler(e)}
        />
        <br />
        <br />
        salary
        <input
          type="text"
          value={input.salary}
          name="salary"
          onChange={(e) => changeHandler(e)}
        />
        <br />
        <br />
        age
        <input
          type="text"
          value={input.age}
          name="age"
          onChange={(e) => changeHandler(e)}
        />
        <br />
        <br />
        id
        <input
          type="text"
          value={input.id}
          name="id"
          onChange={(e) => changeHandler(e)}
        />
        <br />
        <br />
        <button onClick={callApi}>callApi</button>
        <button onClick={callApi2}>CALLPOSTAPI</button>
        <br />
        <br />
        {NAME.map((item) => (
          <h1>NAme: {item.name}</h1>
        ))}
        <form onSubmit={(e) => sendingData(e)}>
          <input
            type="text"
            value={data.name}
            name="name"
            onChange={(e) => updatingName(e)}
          />
          <br />
          <br />
          <button type="submit">updateNAme</button> 
        </form>
      </div>
     
    </div>
  );
};
