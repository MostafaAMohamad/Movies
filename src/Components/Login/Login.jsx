import axios from 'axios';
import joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let [users,setusers]=useState({
    first_name:'',
    last_name:'',
    age:'',
    email:'',
    password:''
});
const  navigator=useNavigate();
let[loading,setloading]=useState(false)
function gotoHome(){
  navigator('/home')
}
  async function send_data(pram){
    pram.preventDefault()
    setloading(true)
    let v=validation()
    console.log(v.error.details)
    //let[data]=await axios.post("https://routeegypt.herokuapp.com/signup",users)
  //console.log(data)
  gotoHome();
  setloading(false)
  }
  function get_data(data){
    let user={...users};
    user[data.target.name]=data.target.value;
    setusers(user);
    console.log(user)
  }

  function validation(){
    const schema=joi.object({
    email:joi.string().email({tlds:{allow:['net','com']}}).required(),
    password:joi.string().pattern(new RegExp(/^[a-z][0-9][3]$/)).required(),
    })
    return schema.validate(users,{abortEarly:false})
  }
  return (
    <>
     <div className='my-5 w-75 m-auto'>
      <h1>Login Form</h1>
     <form onSubmit={send_data}>
      <div className="input-gp my-2">
      <label htmlFor="email">Email :</label>
      <input onChange={get_data} type="text" name='email' className='form-control' />
      </div>
      <div className="input-gp my-2">
      <label htmlFor="password">Password</label>
      <input onChange={get_data} type="password" name='password' className='form-control' />
      </div>
      <button  className='btn btn-info my-2'>{loading?<i className='fa fa-spinner fa-spin'></i>:'Register'}</button>
     </form>
      </div> 
    </>
  )
}
