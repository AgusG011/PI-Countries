import axios from 'axios';

export function getCountries(){
    return async function(dispatch) {
        let aux = await axios.get("http://localhost:3001/countries",{});
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: aux.data
        });
    };
}
export function getNameCountries(name){
    return async function (dispatch){
        try{
            var aux = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: "GET_NAME_COUNTRIES",
                payload: aux.data
            })
        } catch(error){
            console.log(error)
        }
    }
}

export function postActivities(payload){
    // console.log(payload)
    return async function (dispatch){
        var response = await axios.post(`http://localhost:3001/activities`, payload)
        return response
    }

}
export function getDetail(id){
    return async function(dispatch){
        try{
            var aux = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: "GET_DETAILS",
                payload: aux.data
            })
        } catch(error) {
            console.log(error)
        }
    }
}
export function filterCountriesByContinent(payload){
    return{
        type: "FILTER_BY_CONTINENT",
        payload
    }
}
export function filterActivities(payload){
    return{
        type:"FILTER_BY_ACTIVITY",
        payload:payload
    }
}
export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload,
    }
}
export function orderByPopulation(payload) {
    return {
        type: "ORDER_BY_POPULATION",
        payload,
    };
}
export function OrderByPopulation2(payload) {
    return{
        type:  "ORDER_BY_POPULATION2",
        payload,
    };
}
export async function ActivtyDelete(id){
    console.log(id)
        try{
            var aux = await axios.delete(`http://localhost:3001/activities?ActivityId=${id}`)
            // console.log('hola')
        } catch(error) {
            console.log(error)
        }
        window.location.reload()
}