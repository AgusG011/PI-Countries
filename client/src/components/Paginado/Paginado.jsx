import React from "react";
import './Paginado.css';

export default function Paginado ({CountriesPerPage, allCountries, paginado, CurrentPage}){
    const pageNummbers = []

    for (let i = 1; i <= Math.ceil(allCountries/CountriesPerPage); i++) {
        pageNummbers.push(i)
    }

    return (
        <nav>
            <ul className="paginado">
                {pageNummbers && pageNummbers.map ( number =>(
                    <li className="number" key={number}>
                        <button onClick={()=> paginado(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}