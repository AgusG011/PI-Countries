import React, { useState } from "react";
import { Link, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, ActivtyDelete } from "../../Redux/action";
import { useEffect } from "react";
import './Detail.css'
import axios from "axios";
// import {useHistory} from "react-router"

export default function Detail(props){
    let { id } = useParams();
    // console.log(id);
    const [data, setData] = useState([])
    // const History = useHistory();


    useEffect (()=>{
        axios.get(`http://localhost:3001/countries/${id}`, {
            method: 'GET'
        })
            .then(response => response.data)
            .then((datos) => {
                setData(datos)
                // console.log(datos)
            })
            .catch((err) => {
                console.log("ERROR API", err)
            })
    },[id]);
    // console.log(data)
    // console.log(data);http://localhost:3001/activities
    
    // function handleClick(e) {
    //     ActivtyDelete(e.id)
    //     History.go(0)
    // }


    return(
        <div className="dad-detail">
            {
                data.length > 0 ?
                <div className="container">
                       
                    <div className="card-detail">
                        <img className="imgd" src={data[0].flag} alt="Bandera del Pais"/>

                        <div>
                        <h1>Nombre: {data[0].name}</h1>
                        <h2>Id: {data[0].id}</h2>
                        <h2>Capital: {data[0].capital}</h2>
                        <h2>Continente: {data[0].subregion}</h2>
                        <h2>Area: {data[0].area} km²</h2>
                        <h2>Poblacion: {data[0].population}</h2>
                        </div>

                        <div className="back-detail">
                            <Link to="/home">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    
                    <div >
                        {data[0].Activities.length? <h1 className="acti"><b>Actividades:</b></h1>:""}
                        <ul >
                            {data[0].Activities?.map(e=>

                            <li className="containeractivities-cards">
                                <h2>Nombre: {e.name}</h2>
                                <h2>Dificultad: {e.dificulty}</h2>
                                <h2>Duracion: {e.duration}</h2>
                                <h2>Temporada: {e.season}</h2>



                                <div className="elm">
                                    <button onClick = {()=>ActivtyDelete(e.id)} class="noselect"><span class="text">Delete</span><span class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                        </svg></span>
                                    </button>
                                
                                </div>

                            </li>
                           )}
                        </ul>
                    </div>
                </div> : <p>Cargando...</p>
            }
            
        </div>
        
    )
}