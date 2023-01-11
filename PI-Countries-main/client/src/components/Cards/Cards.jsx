import React from "react";
import { Link } from "react-router-dom";
import '../Cards/Cards.css';

    export default function Card({ name, flag, continent, id}){
        return(
            <section className="cards">
                <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">                       
                        <Link to={'/home' + id}>
                    <div className="flip-card-back">
                        <h3 className="link">{name}</h3>
                    </div>
                </Link>
                <div>
                    <img className="img-c" src={flag} alt="No se encontro la bandera"/>
                </div>
                <div className="continent">
                    <h3>{continent}</h3>
                </div>
            </div>    
            </div>
                </div>
                   
                    
            </section>
             
    )}
        