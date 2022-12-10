import { ADD_FAV, DEL_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavourites: [],
    allCharacters: [],
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavourites: [...state.myFavourites, action.payload],
                allCharacters: [...state.allCharacters, action.payload],

                //El metodo push no devuelve un nuevo array, devuelve la propiedad length, no funciona para controlar la mutacion del store
            };
        case DEL_FAV:
            return {
                ...state,
                myFavourites: state.myFavourites.filter((item) => item.id !== action.payload),
                allCharacters: state.myFavourites,
            };
        case FILTER:
                return {
                    ...state,
                    allCharacters: state.allCharacters,
                    myFavourites: action.payload === "all"
                                        ? state.allCharacters
                                        : state.allCharacters.filter((item) => item.gender === action.payload)
                }
        case ORDER:
                /* const ascendente = state.allCharacters.sort(((a, b) => a.id - b.id));
                const descendente = state.allCharacters.sort(((a, b) => b.id - a.id)); */
                return {
                    ...state,
                    allCharacters: state.allCharacters,
                    myFavourites: action.payload === 'Ascendente'
                                        ? state.allCharacters.sort(((a, b) => a.id - b.id)) 
                                        : state.allCharacters.sort(((a, b) => b.id - a.id)) 
                        
                }
        default:
            return {...state};
    }
};