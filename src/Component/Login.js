import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginApi } from "../redux/Reduicer3";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const dispatch = useDispatch();
  const Navigate = useNavigate();


  const apiData = useSelector((state) => state.reducer.CountApi.loginData);
   console.log(apiData);


useEffect(()=>{
 
},[])
  const loggedIn = () => {
     
    console.log("check")
      dispatch(loginApi());
  };
 
  useEffect(() => { 
    if(apiData){
        Navigate("/");
   }
    },[apiData]);
  return (
    <div>
      <div
        style={{
          margin: "10px",
          width: "20%",
          height: "500px",
          display: "inline-block",
          backgroundColor: "",
          border: "2px solid red",
          borderRadius: "20px",
        }}
      >
        {apiData ? (
          <div>
            <img style={{ maxWidth:"100%",width: "200px" }} src={apiData.image} />
            <br />
            <br />
            <br />
          </div>
        ) : (
          <div>
            <img
              style={{ maxWidth:"100%",width: "200px" }}
              src={
                "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
              }
            />
            <br />
            <br />
            <br />
          </div>
        )}
        {apiData && (
          <div>
            <span>firstName : {apiData.firstName}</span>
            <br />
            <br />
            <span>lastName : {apiData.lastName}</span>
            <br />
            <br />
            <span>gender : {apiData.gender}</span>
            <br />
            <br />
          </div>
        )}

        <button onClick={()=>loggedIn()}>Login</button>
      </div>
    </div>
  );
};
