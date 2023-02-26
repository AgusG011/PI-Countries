import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterCountriesByContinent, filterActivities, orderByName, orderByPopulation, OrderByPopulation2} from "../../Redux/action";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import Paginado from "../Paginado/Paginado";
import Searchbar from "../Searchbar/Searchbar";
import './Home.css'
import images from '../../assets/img/uwu.svg';

export default function Home(){
    const dispatch = useDispatch(); // para despachar las actions
    const allCountries = useSelector((state) => state.Countries);
    
    //variables del paginado
    const [CurrentPage, setCurrentPage]  = useState(1); //pagina actual que empieza en 1
    const [CountriesPerPage, setCountriesperPage] = useState(10)//paises por pagina
    const IndexOfLastCountrie = CurrentPage === 1 ? 9 : CurrentPage * CountriesPerPage-1; //currentpage era siempre 10, entonces lo cambie por 9, lo mismo abajo
    const IndexOfFirstCountrie = CurrentPage === 1 ? 0 : IndexOfLastCountrie - CountriesPerPage;
    const CurrentCountries= allCountries.slice(IndexOfFirstCountrie, IndexOfLastCountrie)

    const paginado = (pageNummber) => {
        setCurrentPage(pageNummber)
    }

    const [order, setOrder] = useState("");
    const [orderP, setOrderPopulation] = useState("");

    // trae del estado los countries cuando el componente se monta
    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

    //filtros de botones
    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
        setOrder("");
        setOrderPopulation("");
        document.getElementById('borrar').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('borrar1').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('borrar2').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('borrar3').getElementsByTagName('option')[0].selected = 'selected';
    } 
    function handleSortName (e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);//seteo para que la pagina default arranque en 1
        setOrder(`Sort ${e.target.value}`); // para que cuando setea la pagina mododifique el estado local y se renderize
    }
    function handleSortPopulation(e) {
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1);
        setOrderPopulation(`Ordenado ${e.target.value}`);
    }
    function handleFilterContinents(e){
        dispatch(filterCountriesByContinent(e.target.value))
        setCurrentPage(1)
    }
    function handleFilterByActivities(e){
        dispatch(filterActivities(e.target.value))
        setCurrentPage(1);
    }
    function handleFilterPopulation2(e){
        dispatch(OrderByPopulation2(e.target.value))
    }
    //visual
    return (
        <div className="dad">
            <nav className="navis">
                <div className="dad-nav">
                    <img src={images} alt="logo" className="logis"/>
                    <h2 className="letras">Countries</h2>
                </div>
                
                <Searchbar/> 
                <div className="dad-act">
                    <Link to= '/activities'>
                        <button> Create 
                            <div class="arrow-wrapper">
                                <div class="arrow"></div>
                            </div>
                        </button>
                    </Link>
                </div>

            </nav>
            
            
            <div>
            
                <div className="botonera">
                    <select onChange={e => handleSortName(e)} defaultValue={"default"} id='borrar'>
                        <option value="default" disabled>Order</option>
                        <option value="asc"> A-Z </option>
                        <option value="des"> Z-A </option>
                    </select>
                    <select defaultValue={"default"} onChange={e => handleSortPopulation(e)} id='borrar1'>
                        <option value="default" disabled>Poblation</option>
                        <option value="des"> Max poblation</option>
                        <option value="asc"> Min poblation</option>
                    </select>
                    <select onChange={e=> handleFilterByActivities(e)} id='borrar2'> 
                        <option value="all">Activities</option>
                        <option value="act">with</option>
                        <option value="noA">without</option>
                    </select>
                    <select onChange={e=> handleFilterContinents(e)} id='borrar3'>
                        <option value="All">Continent</option>
                        <option value="Africa">Africa</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    <button onClick={e=> {handleFilterPopulation2(e)}}>
                        Poblation more than 10M
                    </button>
                    <button onClick={e=> {handleClick(e)}}> Clean</button>
                </div>

                <Paginado CountriesPerPage = {CountriesPerPage} allCountries = {allCountries.length} paginado = {paginado} />

                <div className="dad-card">
                    {CurrentCountries?.map((el)=> {
                        return (
                            <Link className="link" to={`/info/${el.id}`}>
                                <div>
                                    <Cards 
                                    name={el.name}
                                    flag={el.flag}
                                    continent={el.continent}
                                    id={el.id}
                                    />
                                </div>
                            </Link>
                        )
                    })}
                </div>
                
            </div>
        </div>
    );
}