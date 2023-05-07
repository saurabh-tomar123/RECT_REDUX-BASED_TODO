import React, {useState} from 'react'

export const Practice = () => {
    const [data,setData]=useState({name:"",email:"",pass:"",feed:"",file:"",dob:""})
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const handleChange=(e)=>{
        e.preventDefault()
        setData({...data,[e.target.name]:e.target.value}) 
    }
   const submitted=(e)=>
    { e.preventDefault()
        console.log('clicked',data)
    }
  return (
    <div>
        <div style={{padding:"10px",width:"30%",height:"500px",display:"inline-block",backgroundColor:"",border:"2px solid red",borderRadius:"20px"}} >
            <form onSubmit={(e)=>submitted(e)}>
                Name :<input type="text" name="name" value={data.name} onChange={(e)=>handleChange(e)} />{data&& (data.name.length >= 3 )? '':<><span style={{color:"red"}}>Required</span></>}<br/><br/>
                file :<input type="file" name="file" value={data.file} onChange={(e)=>handleChange(e)}/><br/><br/>
                email :<input type="email"name="email" value={data.email} onChange={(e)=>handleChange(e)}/>{data &&  (emailRegex.test(data.email)) ?"":<span style={{color:"red"}}>invalid email</span>}<br/><br/>
                password :<input type="password" name="pass" value={data.pass} onChange={(e)=>handleChange(e)}/><br/><br/>
                feedback :<input type="textarea" name="feed" value={data.feed} onChange={(e)=>handleChange(e)} /><br/><br/>
                DOB :<input type="date" value={data.dob} name="dob" onChange={(e)=>handleChange(e)}/><br/><br/>
                <button  type="submit">submit</button><button type="reset">Reset</button>
            </form>
        </div>
    </div>
  )
}
