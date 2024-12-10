import axios from 'axios';
import React, { useEffect, useState } from 'react'
import imgage from '../../Images/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg' 
import image from '../../Images/uQhYBxOVFU6s9agD49FnGHwJqG5.jpg'
import image2 from '../../Images/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg'

import { useNavigate } from 'react-router-dom';
export default function Rawdtty() {
    let[trenditem,settrenditem]=useState([])
    let [cont,setcont]=useState([])
    let baseimgurl='https://image.tmdb.org/t/p/original/'
    async function getitems(callback) {
      let {data}= await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3207ccf3f12936181a06cc12a73c1233&language=en-US&page=1')
      callback(data.results)
    console.log(trenditem)
    setcont(data.results.splice(0,3))
    console.log(cont)
    }
    let navigat=useNavigate();
    useEffect(()=>
        { 
        getitems(settrenditem)
        getitems(setcont); 
        navigat({search :`?pram=${1}`})
        },[])
  return (
    <>
  
    <div className="cotainer my-3">
      <div className="row">
        <div className="col-md-12 vh-100">
        <div  id="carouselExampleDark" className="carousel carousel-dark slide ">
        <div className="carousel-inner">
          <div  className="carousel-item active ">
            <img src={imgage} className="d-block w-100" alt="..."/>
          </div>
          <div  className="carousel-item ">
            <img src={image} className="d-block w-100" alt="..."/>
          </div>
          <div   className="carousel-item">
            <img src={image2}className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
      </div>
    </div> 
     
       
    
    </>
  )
}
