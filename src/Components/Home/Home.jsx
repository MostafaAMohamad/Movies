import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Home() {
  let [seacrhparamater,setsearchparamater]=useSearchParams()
  let pra=seacrhparamater.get('pram')
  let current_id='1';
let[trenditem,settrenditem]=useState([])
let[trendtvshow,settrendtvshow]=useState([])

let baseimgurl='https://image.tmdb.org/t/p/original/'
async function getitems(type,callback) {
  let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=3207ccf3f12936181a06cc12a73c1233`)
  callback(data.results)

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
  
getitems("movie",settrenditem);
getitems("tv",settrendtvshow);
navigat({search :`?pram=${1}`});
},[])
  return (
    <>
     {current_id==pra?<div> <div className="row ">
        <div className="col-md-4 mt-4  ms-0">
          <div className="welcome  my-0  ">
            <div className={`${styles.border} w-25 my-4 `}></div>
              <h1>Trending</h1>
              <h1>Movies</h1>
              <h1>To watch now</h1>
              <h5>most watched movies by day</h5>

            <div className={`${styles.border} w-75 my-4`}></div>
           <div/>
         </div>
            
        </div>
       {trenditem.length>0? trenditem.map((movie)=>
        (
          <div onClick={()=>gotodetail(movie.id)} key={movie.id} className="col-md-2  mt-4">
              <div className={`movies overflow-hidden ${styles.movies}`}>
                <div className={`img  w-100` }>
                
                 <img className='w-100' src={baseimgurl+movie.poster_path} />
                  </div>
                  <div className={`${styles.vote}  d-flex align-items-center justify-content-center`}>{movie.vote_average}</div>
                <h2 className='h5 mt-1'>{movie.title}</h2>
              </div> 
          </div>
        )
        ): <div className='d-flex justify-content-center align-items-center vh-100 '><i className='fa fa-spinner fa-spin fa-5x bg-ganger'></i></div>}
      </div>

      <div className="row ">
        <div className="col-md-4 mt-4  ms-0">
          <div className="welcome  my-0  ">
            <div className={`${styles.border} w-25 my-4 `}></div>
              <h1>Trending</h1>
              <h1>Tv Shows</h1>
              <h1>To watch now</h1>
              <h5>most watched Yv Shows by day</h5>

            <div className={`${styles.border} w-75 my-4`}></div>
           <div/>
         </div>
            
        </div>
       {trenditem.length>0? trendtvshow.map((tv)=>
        (
          <div key={tv.id} className="col-md-2 mt-4">
              <div className={`movies ${styles.movies}`}>
                <div className="img w-100 ">
                 <img className='w-100' src={baseimgurl+tv.poster_path} />
                  </div>
                  <div className={`${styles.vote}  d-flex align-items-center justify-content-center`}>{tv.vote_average}</div>
                <h2 className='h5 mt-1'>{tv.name}</h2>
              </div> 
          </div>
        )
        ): <div className='d-flex justify-content-center align-items-center vh-100 '><i className='fa fa-spinner fa-spin fa-5x bg-ganger'></i></div>}
      </div></div>: <div className="note bg-gradient shadow-lg p-3 mb-5  rounded">
        <h2>Note:</h2>
        <h4>please You need to log in first</h4>
        <button onClick={gotologin} className='btn btn-info my-2'>Log in</button>

      </div>}
    </>
  )
}
