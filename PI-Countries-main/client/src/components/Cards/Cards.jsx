import React from "react";
import { Link } from "react-router-dom";
import '../Cards/Cards.css';


    export default function Card({ name, flag, continent, id}){
        return(
                <section className="cards">
            <div className="flip-card">
                <div>
                    <img className="img" src={flag} alt="No se encontro la bandera"/>
                </div>
                
                <Link to={'/home' + id} className= "link">{name}</Link>
                
                <div className="continent">
                    <h3>{continent}</h3>
                </div>
            </div>        
            </section>
        )
    }
        