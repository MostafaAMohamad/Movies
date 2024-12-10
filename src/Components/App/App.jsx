import React, { useCallback, useEffect, useState }   from 'react';
import '../../App.css';
import About from '../About/About';
import Details from '../Details/Details';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Navbar from '../Navbar/Navbar';
import Networks from '../Networks/Networks';
import Notfound from '../Notfound/Notfound';
import People from '../People/People';
import Register from '../Register/Register';
import Tvshows from '../Tvshows/Tvshows';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Rawdtty from '../Rawdtty/Rawdtty';
import { useSearchParams } from 'react-router-dom'
import Logout from '../Logout/Logout';

function App() {
  let [seacrhparam,setsearchparam]=useSearchParams()
let navigate=useNavigate()

let[ current_id,setcurrent_id]=useState(0);

  useEffect(()=>
    {
    
    setcurrent_id(seacrhparam.get('pram'));
    setsearchparam(current_id);
    navigate({search:`pram=${current_id}`})
    
    },[])
  return (
    <>
  
     <Navbar />
   <div className="container">
   <Routes>
   <Route path='/' element={<Login/>}></Route>
      <Route path='home' element={<Home/>}></Route>
      <Route path='movie' element={<Movies/>}></Route>
      <Route path='tvshows' element={<Tvshows/>}></Route>
      <Route path='people' element={<People/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='rawdtty' element={<Rawdtty/>}></Route>
      <Route path='detail' element={<Details/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='network' element={<Networks/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
      
    </Routes>
   </div> 
    </>
  );
}

export default App;
