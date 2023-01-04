import axios from 'axios';

export function getCountries(){  //se realiza conexion entre back y frond
    return async function(dispatch) { 
        let aux = await axios.get("http://localhost:3001/countries",{});
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: aux.data
        });
    };
}