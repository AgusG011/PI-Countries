import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../../Redux/action";
import './Searchbar.css'

export default function Searchbar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameCountries(name))
        setName("")
    }

    return(
        <div>
            <input
            className="search-input" 
            value={name}
            onChange={e=>handleInputChange(e)}
            type="text" 
            placeholder="Buscar Pais"
            />
            <button className="buttons-home" type="submit" onClick={e=>handleSubmit(e)}>Buscar</button>
        </div>
    )
}