import React, { useEffect, useState } from 'react'
import styles from './People'
import axios from 'axios'

export default function People() {
  let[trenditem,settrenditem]=useState([])
  let baseimgurl='https://image.tmdb.org/t/p/original/'
  async function getitems(callback) {
    let {data}= await axios.get('https://api.themoviedb.org/3/person/popular?api_key=3207ccf3f12936181a06cc12a73c1233&language=en-US&page=1')
    callback(data.results)
    console.log(data.results)
  
  }
  useEffect(()=>
    {
    getitems(settrenditem); 
    },[])
  
    return (
      <>
       <div className="row ">
         
         {trenditem.length>0? trenditem.map((people)=>
          (
            <div key={people.id} className="col-md-2 mt-4">
                <div className={`movies ${styles.movies}`}>
                  <div className="img w-100 ">
                   <img className='w-100' src={baseimgurl+people.profile_path} />
                    </div>
                    <div className={`${styles.vote}  d-flex align-items-center justify-content-center`}>{people.vote_average}</div>
                  <h2 className='h5 mt-1'>{people.name}</h2>
                </div> 
            </div>
          )
          ): <div className='d-flex justify-content-center align-items-center vh-100 '><i className='fa fa-spinner fa-spin fa-5x bg-ganger'></i></div>}
        </div> 
      </>
    )
}
