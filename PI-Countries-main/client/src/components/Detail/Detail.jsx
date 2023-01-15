import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../Redux/action";
import { useEffect } from "react";
import './Detail.css'
import axios from "axios";

export default function Detail(props){
    let { id } = useParams();
    // console.log(id);
    const [data, setData] = useState([])
    
    useEffect (()=>{
        axios.get(`https://restcountries.com/v3/alpha/${id}`, {
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
    console.log(data)

    return(
        <div>
            {/* <p>{data[0]?.cca2}</p> */}
            {
                data.length > 0 ?
                <div className="container">
                    <div className="background">
                        <img className="img" src={data[0].flags} alt="Bandera del Pais"/>
                    </div>
                    <div className="card-detail">
                        <h1>Nombre: {data[0].name.common}</h1>
                        <h2>Id: {data[0].id}</h2>
                        <h2>Capital: {data[0].capital}</h2>
                        <h2>Continente: {data[0].subregion}</h2>
                        <h2>Area: {data[0].area} km²</h2>
                        <h2>Poblacion: {data[0].population}</h2>
                    </div>
                    {/* <div className="container-activities-cards">
                        {data[0].activities.length? <h1><b>Activities:</b></h1>:""}
                        {data[0].activities?.map(e=><div>
                            <ul className="card-activities">
                                <h2>Nombre: {e.name}</h2>
                                <h2>Dificultad: {e.dificulty}</h2>
                                <h2>Duracion: {e.duration}</h2>
                                <h2>Temporada: {e.season}</h2>
                            </ul>
                        </div>)}
                    </div> */}
                </div> : <p>Cargando...</p>
            }
            <Link to= '/home'>
                <button className="volver">Volver</button>
            </Link>
        </div>
        // <h1>diego puta</h1>
    )
}