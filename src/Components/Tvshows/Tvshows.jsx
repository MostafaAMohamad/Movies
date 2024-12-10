
import React, { useEffect, useState } from 'react'
import styles from './Tvshows.module.css'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Tvshows() {
  let [seacrhparamater,setsearchparamater]=useSearchParams()
  let pra=seacrhparamater.get('pram')
let current_id='1';

let[trenditem,settrenditem]=useState([])
let baseimgurl='https://image.tmdb.org/t/p/original/'

async function getitems(callback) {
  let {data}= await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=3207ccf3f12936181a06cc12a73c1233')
  callback(data.results)
  console.log(data.results)
}

let navigat=useNavigate()
function gotodetail(id){
 navigat({
  pathname:'/detail',
  search:`?id=${id}`
 })
}
function gotologin(){
  navigat('/login')
}
useEffect(()=>
  {
  getitems(settrenditem); 
  navigat({search :`?pram=${1}`})
  },[])

  return (
    <>
     {current_id==pra?<div className="row ">
       
       {trenditem.length>0? trenditem.map((tv)=>
        (
          <div  key={tv.id} className="col-md-2 mt-4">
              <div className={` ${styles.movies}`}>
                <div className="img w-100 ">
                 <img className='w-100' src={baseimgurl+tv.poster_path} />
                  </div>
                  <div className={`${styles.vote}  d-flex align-items-center justify-content-center`}>{tv.vote_average}</div>
                <h2 className='h5 mt-2'>{tv.original_name}</h2>
              </div> 
          </div>
        )
        ): <div className='d-flex justify-content-center align-items-center vh-100 '><i className='fa fa-spinner fa-spin fa-5x bg-ganger'></i></div>}
      </div>: <div className="note bg-gradient shadow-lg p-3 mb-5  rounded">
        <h2>Note:</h2>
        <h4>please You need to log in first</h4>
        <button onClick={gotologin} className='btn btn-info my-2'>Log in</button>

      </div> }
    </>
  )
}
