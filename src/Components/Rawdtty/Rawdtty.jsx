import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate ,useSearchParams} from 'react-router-dom';
export default function Rawdtty() {
  let [seacrhparamater,setsearchparamater]=useSearchParams()
  let pra=seacrhparamater.get('pram')
  let current_id='1';
    let navigat=useNavigate();
    function gotologin(){
      navigat('/login')
    }
    
    useEffect(()=>
        { 
        navigat({search :`?pram=${1}`})
        },[])
  return (
    <>
 {[pra!=current_id?<div className="note bg-gradient shadow-lg p-3 mb-5  rounded">
        <h2>Note:</h2>
        <h4>please You need to log in first</h4>
        <button onClick={gotologin} className='btn btn-info my-2'>Log in</button>

      </div>:'' ]}
    </>
  )
}
