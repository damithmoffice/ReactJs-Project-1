import React,{useEffect,useState} from 'react'

import './footer.scss'
import video2 from '../../media/video/2.mp4';
import {FiChevronRight, FiSend} from 'react-icons/fi';
import {FiYoutube ,FiFacebook,FiInstagram} from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css'



function Footer() {

  useEffect
  (()=>{
    Aos.init({duration:2000})
  
  },[])





  return (
    <section className="footer">

        <div className="videoDiv">
          <video src={video2} loop autoPlay muted type="video/mp4"></video>
          </div>
           <div data-aos="fade-up" className="secContect container">
            <div className="contacDiv flex">
              <div className="text">
                  <small>KEEP IN TOUCH</small>
                  <h2>Travel with us</h2>
              </div>
              <div className="inputDiv flex">
                  <input type="text" placeholder='email@email.com' />
                  <button className='btn flex' type='submit'>
                    Subscribe <FiSend className='icon'/>
                  </button>
              </div>
            </div> 
          
        
           <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href='#' className='logo flex'>
                Travelling - Created By Damith Madhusanka
                </a>
              </div>
              <div className="footerParagraph">
              Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.
              </div>
              <div className="footerSocials flex">
              <FiFacebook className="icon"/>
              <FiInstagram className="icon"/>
              <FiYoutube className="icon"/>
              </div>
            </div>
            <div className="footerLinks grid">
                <div className="linkGroup">
                  <span className="groupTitle">Our Agency</span>
                    <li className="footList flex">
                      <FiChevronRight className="icon"/>
                      Services
                    </li>
                    <li className="footList flex">
                      <FiChevronRight  className="icon"/>
                      Insurance
                    </li>
                    <li className="footList flex">
                      <FiChevronRight  className="icon"/>
                      Agency
                    </li>
                    <li className="footList flex">
                      <FiChevronRight  className="icon"/>
                      Contact
                    </li>
                    <li className="footList flex">
                      <FiChevronRight  className="icon"/>
                      More
                    </li>
                  
                </div>
                <div className="linkGroup">
                  <span className="groupTitle">Support</span>
                    <li className="footList flex">
                      <FiChevronRight className="icon"/>
                      Services
                    </li>
                    <li className="footList flex">
                      <FiChevronRight  className="icon"/>
                      Insurance
                    </li>
                    <li className="footList flex">
                      <FiChevronRight  className="icon"/>
                      Agency
                    </li>
                    <li className="footList flex">
                      <FiChevronRight  className="icon"/>
                      Contact
                    </li>
                    <li className="footList flex">
                      <FiChevronRight  className="icon"/>
                      More
                    </li>
                  
                </div>
                <div className="linkGroup">
                  <span className="groupTitle">Private</span>
                    <li className="footList flex">
                      <FiChevronRight className="icon"/>
                      Services
                    </li>
                    <li className="footList flex">
                      <FiChevronRight  className="icon"/>
                      Insurance
                    </li>
                    <li className="footList flex">
                      <FiChevronRight  className="icon"/>
                      Agency
                    </li>
                    <li className="footList flex">
                      <FiChevronRight  className="icon"/>
                      Contact
                    </li>
                    <li className="footList flex">
                      <FiChevronRight  className="icon"/>
                      More
                    </li>
                  
                </div>
            </div>
          </div>
          </div>
          

    </section>
  )
}

export default Footer


