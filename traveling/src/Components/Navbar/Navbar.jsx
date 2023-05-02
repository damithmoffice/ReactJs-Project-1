import React from 'react'
import './navbar.css'
import './navbar.scss';
import { useEffect,useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar=()=> {


  useEffect
  (()=>{
    Aos.init({duration:2000})
  
  },[])

  const[active,setActive]=useState('navBar');
  const showNav=()=>{


    if(active){
      setActive('navBar activeNavBar')
    }
  }
  const closeNav=()=>{


    if(active){
      setActive('navBar')
    }
  }
  
  


  return (
    <section className='navBarSection'>
        <header className="header flex">
            <div className="logoDiv">
                <a href='#' className='logo flex'>
                    <h1 data-aos="fade-right" >Travelling.</h1>
                </a>

            </div>
            <div className={active}>
              <ul  data-aos="fade-left"className="navLists flex">
                <li  className='navItem'><a href='#' className='navLink'>Home</a> 
                </li>
                <li  className='navItem'><a href='#' className='navLink'>Packages</a> 
                </li>
                <li  className='navItem'><a href='#' className='navLink'>Shop</a> 
                </li>
                <li  className='navItem'><a href='#' className='navLink'>About</a> 
                </li>
                <li  className='navItem'><a href='#' className='navLink'>Pages</a> 
                </li>
                <li  className='navItem'><a href='#' className='navLink'>Newss</a> 
                </li>
                <li  className='navItem'><a href='#' className='navLink'>Contact</a> 
                </li>
                <button className='btn'><a className="bbtn"href='#'>Book Now</a></button>
              </ul>
              <div data-aos="fade-up" className="closeNavBar" onClick={closeNav}>
                <AiFillCloseCircle className='icon'/>
              </div>
              
            </div>
            <div data-aos="fade-left" className="toggleNavBar" onClick={showNav}>
                <TbGridDots className='icon'/>
              </div>
        </header>
    </section>
  )
}

export default Navbar

