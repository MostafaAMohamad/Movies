import React   from 'react';
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
import { Route, Routes } from 'react-router-dom';
import Rawdtty from '../Rawdtty/Rawdtty';
function App() {

  return (
    <>
  
     <Navbar/>
   <div className="container">
   <Routes>
   <Route path='/' element={<Home/>}></Route>
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
