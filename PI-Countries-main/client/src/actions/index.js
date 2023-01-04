import axios from 'axios';

export function getcountry (){        //se realiza conexion entre back y frond

   return async function(dispatch){

    var json = await axios.get('http://localhost:3001/Country');
  
    return dispatch({
        type:'GET_COUNTRY',
        payload:json.data,         
    })
   }
}
