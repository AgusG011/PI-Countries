import React from "react";
import {Link} from 'react-router-dom';
import './LandingPage/LandingPage.css';

export default function LandingPage(){
    return(
        <div className='landing'>
          
            <h1 > Bien venido! </h1> 
            <img src={'https://i.pinimg.com/originals/5f/0f/6c/5f0f6c850f25343e35b5e46f4bd51cfa.jpg'} alt="" className='imagen' />
            <Link to ='/home'><button className='btn'> Ver mas </button></Link>
            
        </div>
    )}