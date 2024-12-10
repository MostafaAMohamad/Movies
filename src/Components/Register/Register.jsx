import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import joi from 'joi';
import Login from '../Login/Login';

export default function Register() {
  let [users,setusers]=useState({
    first_name:'',
    last_name:'',
    age:'',
    email:'',
    password:''
});
const  navigator=useNavigate();
let[loading,setloading]=useState(false)
function gotologin(){
  navigator('/login')
}
  async function send_data(pram){
    pram.preventDefault()
    setloading(true)
    let v=validation()
    console.log(v.error.details)
    //let[data]=await axios.post("https://routeegypt.herokuapp.com/signup",users)
  //console.log(data)
  gotologin();
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
      first_name:joi.string().required().min(3).max(15),
    last_name:joi.string().required().min(3).max(15),
    age:joi.number().required().min(20).max(80),
    email:joi.string().email({tlds:{allow:['net','com']}}).required(),
    password:joi.string().pattern(new RegExp(/^[a-z][0-9][3]$/)).required(),
    })
    return schema.validate(users,{abortEarly:false})
  }
  return (
    <>
     <div className='my-5 w-75 m-auto'>
      <h1>Registerayion Form</h1>
     <form onSubmit={send_data}>
     <div className="input-gp my-2">
      <label htmlFor="first_name">First Name</label>
      <input onChange={get_data} type="text" name='first_name' className='form-control' />
      </div>
      <div className="input-gp my-2 my-2">
      <label htmlFor="last_name">Last Name :</label>
      <input onChange={get_data} type="text" name='last_name' className='form-control' />
      </div>
      <div className="input-gp my-2">
      <label htmlFor="age">Age :</label>
      <input onChange={get_data} type="number" name='age' className='form-control' />
      </div>
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
