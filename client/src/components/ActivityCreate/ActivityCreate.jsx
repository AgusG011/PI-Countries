import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { postActivities, getCountries } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import './ActivityCreate.css'


export default function ActivityCreate(){
    const dispatch = useDispatch()
    const Countries = useSelector((state)=> state.Countries)
    const history = useHistory()
    const [errors, setErrors] = useState({})
    const [buttonEnabled, setButtonEnabled] = useState(false);
    const [input, setInput] = useState({
        name:"",
        dificulty:"",
        duration:"",
        season:"",
        countriesName:[]
    })
    useEffect(()=> {    // Como siempre, un hook que es llamado, cuando el componente ya es montado
        dispatch(getCountries())
    },[]);
    
    function validate(input){
        let errors={};
        if(!input.name) errors.name= "*Nombre de la Actividad requerida*"
        setButtonEnabled(false)
        if(input.name.length <3 || input.name.length>15) errors.name = "*Nombre de Actividad invalido*"
        setButtonEnabled(false)
        if(input.duration <=0 || input.duration >= 24) errors.duration = "*Por favor, escriba una duracion entre 1 a 24 horas*"
        setButtonEnabled(false)
        if(!input.duration) errors.duration = "*Duracion requerida*"
        setButtonEnabled(false)
        if(!input.season) errors.season = "*Por favor, seleccione una temporada*"
        setButtonEnabled(false)
        if(!input.NombrePais) errors.NombrePais = "*Por favor, seleccione un pais*"
        setButtonEnabled(false)
        if(!input.dificulty) errors.dificulty = "*Por favor, seleccione una dificultad*"
        setButtonEnabled(false)
        ///////////////////////////////////////////////////////////////////////////////////
        if (Object.entries(errors).length === 0) setButtonEnabled(true);
        ///////////////////////////////////////////////////////////////////////////////////
        return errors
    }
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    function handleCountrySelect(e){
        if(input.countriesName.includes(e.target.value)) //Si mi estado local input.temp... incluye el value, retorna una alerta
        return alert("Ya seleccionaste este pais")
        const index = Countries.findIndex(object => {
            return object.name === e.target.value
        })
        
        setInput({
            ...input,
            countriesName: [...input.countriesName, e.target.value]
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    function handleSelect(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    function handleDelete(e){
        setInput({
            ...input,
            countriesName: input.countriesName.filter(f=>f!==e)
        })
        Countries.push(e)
        console.log(e)
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(postActivities(input))
        alert("Actividad creada!")
        console.log(input)
        setInput({
            name:"",
            dificulty:"",
            duration:"",
            season:"",
            countriesName:[]
        })
        history.push('/home')
    }

    return(
        <div className="padre">
            <div class="card-create">
                    <div className="back">
                        <Link to="/home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
                            </svg>
                        </Link>
                    </div>

                <span class="card__title">Create your activitie</span>
                    <div class="card__form">
                    <div>
                        <label>Name:</label>
                        <br />
                        <input type="text"
                        value={input.name}
                        name= "name"
                        onChange={handleChange}
                        />
                        <div >
                        {errors.name&&(
                            <p className="warning">{errors.name}</p>
                        )}
                    </div>
                
                    <div>
                        <label>Dificultad:</label>
                        <select defaultValue={'default'} name="dificulty" onChange={e=> handleSelect(e)}>
                            <option value="default" disabled>Dificultad </option>
                            
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div>
                        {errors.dificulty&&(
                            <p className="warning">{errors.dificulty}</p>
                        )}
                    </div>

                    <div>
                        <label>Duracion:</label>
                        <br />
                        <input type="number"
                        name="duration"
                        value={input.duration}
                        onChange={handleChange}
                        />
                        {errors.duration &&(
                            <p className="warning">{errors.duration}</p>
                        )}
                    </div>
                    <div>
                        <label>Temporada:</label>
                        <select defaultValue={'default'} name="season" onChange={e=>handleSelect(e)}>
                            <option value="default" disabled>Temporada</option>
                            <br />
                            <option value="summer">Verano</option>
                            <option value="winter">Invierno</option>
                            <option value="autumn">Otoño</option>
                            <option value="spring">Primavera</option>
                        </select>
                    </div>
                    <div>{errors.season&&(
                        <p className="warning">{errors.season}</p>
                    )}
                    </div>
                    <div>
                        <select  onChange={e=>handleCountrySelect(e)}>
                            <option >Selecciona el Pais</option>
                            {Countries.map(c=>(
                                <option value={c.name}>{c.name}</option>
                            ))}
                        </select>
                        {errors.countriesName&&(
                            <p className="warning">{errors.countriesName}</p>
                        )}
                            </div>
                            <br/><br/>
                        <button onClick={handleSubmit} class="sign-up"type="submit" >Create</button>
                    </div>
                </div>
            </div>
        </div>  
  )   }