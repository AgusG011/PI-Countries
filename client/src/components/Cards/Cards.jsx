import React from "react";
import { Link } from "react-router-dom";
import '../Cards/Cards.css';


    export default function Card({ name, flag, continent, id}){
        return(
            <section className="card">
                <div className="flip-card">
                    
                        <img className="img" src={flag} alt="No se encontro la bandera"/>
                   
                    
                    <h3 className= "link">{name}</h3>
                    
                    <div className="continent">
                        <h3>{continent}</h3>
                    </div>
                </div>        
            </section>
        )
    }
    
        