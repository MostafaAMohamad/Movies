import axios from 'axios';
import joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {

  let [users,setusers]=useState({
    email:'',
    password: '',
});
let bool=false;
const  navigator=useNavigate();
let[loading,setloading]=useState(false)
let navigat=useNavigate()
function gotoHome(pram,check){
  bool=check
  if(bool===true){
    navigat({
      pathname:'/home',
      search:`?pram=${pram}`
     })
  }
  else
  navigator('/login')
}
   function send_data(pram){
    pram.preventDefault()   
    const useremail='mostafa@hotmail.com';
    const  userpassword='123';

    //console.log(v.error.details)
    //let[data]=await axios.post("https://routeegypt.herokuapp.com/signup",users)
  //console.log(data)
  if(useremail==users.email)
  {
    if (userpassword===users.password )
     {
    setloading(true)
    gotoHome(1,true);
    }
     else {
       console.log('faild')
       alert('Please try again')
  }
}
  else {
   console.log('faild')
   alert('Please try again')
  }
  }
  function get_data(data){
    let user={...users};
    user[data.target.name]=data.target.value;
    setusers(user);
    console.log(user)
  }
  function gosigup(){
    navigator ('/register')
  }

  function validation(){
    const schema=joi.object({
    email:joi.string().email({tlds:{allow:['net','com']}}).required(),
   // password:joi.string().pattern(new RegExp(/^[a-z][0-9][3]$/)).required(),
    })
    return schema.validate(users,{abortEarly:false})
  }
  return (
    <>
    
     <div className='my-5 w-75 m-auto'>
      <h1>Login Form</h1>
     <form onSubmit={send_data}>
      <div className="note bg-gradient shadow-lg p-3 mb-5  rounded">
        <h2>Note:</h2>
        <h4>please use this credentials temporary</h4>
        <h6>user name: 'mostafa@hotmail.com' </h6>
        <h6>password: '123' </h6>
      </div>
      <div className="input-gp my-2">
      <label htmlFor="email">Email :</label>
      <input onChange={get_data} type="text" name='email' className='form-control' />
      </div>
      <div className="input-gp my-2">
      <label htmlFor="password">Password</label>
      <input onChange={get_data} type="password" name='password' className='form-control' />
      </div>
      <button  className='btn btn-info my-2'>{loading?<i className='fa fa-spinner fa-spin'></i>:'Log in'}</button>
      <button  className='btn btn-info my-2 ms-2' onClick={gosigup}>Sign Up</button>

     </form>
      </div> 
    </>
  )
}
