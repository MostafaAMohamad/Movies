import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Movies.module.css'
import { useNavigate } from 'react-router-dom';

export default function Movies() {
let[trenditem,settrenditem]=useState([])
let baseimgurl='https://image.tmdb.org/t/p/original/'
async function getitems(callback) {
  let {data}= await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3207ccf3f12936181a06cc12a73c1233&language=en-US&page=1')
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
useEffect(()=>
  {
  getitems(settrenditem); 
  },[])

  return (
    <>
     <div className="row ">
       
       {trenditem.length>0? trenditem.map((movie)=>
        (
          <div onClick={()=>gotodetail(movie.id)} key={movie.id} className="col-md-2 mt-4">
              <div className={`movies ${styles.movies}`}>
                <div className="img w-100 ">
                 <img className='w-100' src={baseimgurl+movie.poster_path} />
                  </div>
                  <div className={`${styles.vote}  d-flex align-items-center justify-content-center`}>{movie.vote_average}</div>
                <h2 className='h5 mt-1'>{movie.original_title}</h2>
              </div> 
          </div>
        )
        ): <div className='d-flex justify-content-center align-items-center vh-100 '><i className='fa fa-spinner fa-spin fa-5x bg-ganger'></i></div>}
      </div> 
    </>
  )
}
