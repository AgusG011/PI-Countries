const initialState = {
    Countries: [], // este estado es el que me traigo en Cards.jsx 
    allCountries: [],
    detail: []
}

export default function rootReducer(state= initialState, action){
    switch(action.type){
        case "GET_COUNTRIES":
            return {
                ...state,
                Countries: action.payload,
                allCountries: action.payload
            };
            case "GET_NAME_COUNTRIES":
                return {
                    ...state,
                    Countries: action.payload,
                }
            case "POST_ACTIVITY":
                return {
                    ...state
                };
            case "FILTER_BY_CONTINENT":
                const allCountries = state.allCountries
                const continentFiltered = action.payload === 'All' ? allCountries: allCountries.filter(f=> f.continent === action.payload)
                return{
                    ...state,
                    Countries: continentFiltered
                };
            case "FILTER_BY_ACTIVITY":
                const allCountry = state.Countries
            
                const activityFilter = action.payload === 'act' ? allCountry.filter(f=> f.Activities.length !==0): action.payload === 'noA'? allCountry.filter(f=>!f.Activities.length) : allCountry
                return {
                    ...state,
                    Countries:activityFilter
                }
            case 'ORDER_BY_NAME':
                let sortedArr = action.payload === 'asc' ?
                state.Countries.sort(function(a, b){
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }):
                state.Countries.sort(function(a, b){
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    Countries: sortedArr
                }
                case "ORDER_BY_POPULATION":
                    let sortPopulationArr =
                    action.payload === 'asc' ?
                    state.Countries.sort(function (a, b) {
                        if (a.population > b.population) {
                            return 1;
                        }
                        if (b.population > a.population) {
                            return -1;
                        }
                        return 0;
                    }):
                    state.Countries.sort(function (a, b){
                        if (a.population > b.population) {
                            return -1;
                        }
                        if(b.population > a.population) {
                            return 1;
                        }
                        return 0;
                    });
                    return {
                        ...state,
                        Countries: sortPopulationArr
                    };
                case "GET_DETAILS":
                    return{
                        ...state,
                        detail: action.payload
                    };
                case "ORDER_BY_POPULATION2":
                    const allCountrys = state.Countries;
                    const MayorPopulation = allCountrys.filter(p=>p.population > 10000000)
                return{
                    ...state,
                    Countries: MayorPopulation
                }
        default: return state;
    }
}