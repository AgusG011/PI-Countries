import React from "react";
import {Link} from 'react-router-dom';
import '../LandingPage/LandingPage.css';

export default function LandingPage(){
    return(
        <div className='landing'>
          
            <h1 > Bien venido! </h1> 
            <img src={'https://i.pinimg.com/originals/1b/61/c5/1b61c518124ddc4ef9da739c6b5cc1bd.png'} alt="" className='imagen' />
            <Link to ='/home'><button className='btn'> Ver mas </button></Link>
            
        </div>
    )}