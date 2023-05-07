import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { formdatavalue } from "../redux/Reducer";
import { updateDataValue, dataDelete, deleteAll } from "../redux/Reducer";
import { CounterPage } from "./CounterPage";
import { useNavigate,NavLink } from "react-router-dom";
import {logout} from '../redux/Reduicer3'


export const Form = () => {
  const dispatch = useDispatch();
  const Navigate=useNavigate()
  const [formErr,setformErr]=useState({})
  const [count,setCount]=useState(false)
  const [data, setData] = useState([
    { Name: "", Email: "", Mob: "", Task: "" },
  ]);
  const [update, SetUpdate] = useState();
  const counter = useSelector((state) => state.reducer.counter.formdata);
  const apiData = useSelector((state) => state.reducer.CountApi.loginData);
  

  const handleChange = (e) => {
    e.preventDefault();
    setCount(true)
    setData({ ...data, [e.target.name]: e.target.value });
    Validation()
      // else if(data.email === '')
      // {
      //   err.email='Email required'
      //  setformErr( err)
      // }
  };
  const Validation=()=>{
    let err={}
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(data.email)){
     err.email='invalid email'
     setformErr( err)
    //  return true
    }
  }
  const resetData = (e) => {
    e.preventDefault();
    if(!data.Name)
    {
      
      alert("you can't submit empty name,email")
    }
    else{
      if (update || update === 0) {
        dispatch(updateDataValue({ ...data, id: update }));
        setData({ Name: "", Email: "", Mob: "", Task: "" });
        SetUpdate("");
        setCount(false)
      } else {
        if(count){
          dispatch(formdatavalue(data));
          setData({ Name: "", Email: "", Mob: "", Task: "" });
          setCount(false)
        }
      }
    }
   
  };
{formErr&& console.log(formErr.email)}
  const updateData = (item, i) => {
    SetUpdate(i);
    setData({
      ...data,
      Name: item.Name,
      Email: item.Email,
      Mob: item.Mob,
      Task: item.Task,
    });
  };
  const cancelData = () => {
    setData({ Name: "", Email: "", Mob: "", Task: "" });
  };

  const deleteData = (item, i) => {
    dispatch(dataDelete(i));
  };

  const delData = () => {
    dispatch(deleteAll(counter.length));
  };
  const deleteToken=()=>{
  //   console.log("logOut")
  // localStorage.setItem("login1",JSON.stringify(''))
     dispatch(logout())
  alert("logout Successfully")
  Navigate('/login')
  }
  useEffect(()=>{
    if(apiData == null ||undefined){
      Navigate('/login')
    }
  },apiData)
  return (
    <div>
       <div>
        <NavLink style={{marginRight:"20px"}} to="/products">PRODUCTS </NavLink>
        <NavLink style={{marginRight:"20px"}} to="/addtocart">ADDTOCART </NavLink>
        <NavLink to="login">LOGIN </NavLink>
        {/* <NavLink to=""> </NavLink>
        <NavLink to=""> </NavLink> */}

      </div>
    <div className="dvAlign">
     
      <Button variant="outline-danger" className="logout" onClick={deleteToken}>
            Logout
          </Button>
      <div className="dv1">
        <form onSubmit={(e) => resetData(e)}>
          <label className="lbl">name</label>
          <input
            className="inpt"
            type="text"
            name="Name"
            value={data.Name}
            onChange={(e) => handleChange(e)}
            id="Name"
          />
          <label className="lbl">Email </label>
          <input
            className="inpt"
            type="email"
            name="Email"
            value={data.Email}
            required
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
         {/* {Validation ? <span>{formErr.email}</span>:null} */}
          <label className="lbl">Mob . </label>
          <input
            className="inpt"
            type="number"
            name="Mob"
            value={data.Mob}
            onChange={(e) => handleChange(e)}
          />
          <label className="lbl"> Task </label>
          <input
            className="inpt2"
            type="text"
            name="Task"
            value={data.Task}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <Button type="submit" variant="outline-primary">
            Submit
          </Button>{" "}
          <Button variant="outline-danger" onClick={cancelData}>
            Cancel
          </Button>{" "}
          <br />
          <br />
          <Button variant="outline-danger" onClick={delData}>
            DeleteAll
          </Button>
        </form>

        <div className="table-wrapper-scroll-y my-custom-scrollbar tbl">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mob No.</th>
                <th>Task</th>
                <th>operations</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                counter.map((item, i) => (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Mob}</td>
                    <td>{item.Task}</td>
                    <td>
                      <Button
                        className="btn2"
                        variant="outline-primary"
                        onClick={(index) => updateData(item, i)}
                      >
                        edit
                      </Button>{" "}
                      <Button
                        variant="outline-danger"
                        onClick={(item) => deleteData(item, i)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>

      <CounterPage />
    </div>
    </div>
  );
};
