import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './Details.module.css'
export default function Details() {
  let [seacrhparam,setsearchparam]=useSearchParams()
  let[detail,setdetail]=useState({});
  let [det,setdet]=useState({})
let baseimgurl='https://image.tmdb.org/t/p/original/';
let current_id=seacrhparam.get("id")
console.log(current_id)
async function getitems(type) {
  let {data}= await axios.get(`https://api.themoviedb.org/3/${type}/${current_id}?api_key=3207ccf3f12936181a06cc12a73c1233&language=en-US`)
  setdetail(data)
  setdet(data.genres)
  
  console.log(data.genres)


}

useEffect(()=>
  {
  getitems('movie');
  },[])

  return (
    <>
      <div className="row">
        
         <div className="col-md-4 mt-5 ">
          <div className="img w-100">
            <img className='w-100' src={baseimgurl+detail.poster_path} alt="" />
          </div>
          </div>
         <div className="col-md-8  mt-5">
          <h1 className='fs-1 mt-2 fw-semibold'>{detail.original_title}</h1>
          <h4 className={`${styles.font} text-secondary`}>{detail.tagline}</h4>
           {det.length>0?det.map((movie)=>
        (
          <div key={movie.id} className="btn btn-info ms-3 my-4 text-light">{movie.name}</div>    
        )
        ):''} 
        <h5 className='mb-5'>Vote : {detail.vote_average}</h5>
        <h5 className='mb-5'>Popularity : {detail.popularity}</h5>
        <h5 className='mb-5' >Vote Count : {detail.vote_count}</h5>
        <h5 className='mb-5'>Release Date : {detail.release_date}</h5>

<h6 className='lh-lg fw-lighte fs-5 text-secondary text-capitalize'>{detail.overview}</h6>
         </div>
      </div>
      
    </>
  )
}
