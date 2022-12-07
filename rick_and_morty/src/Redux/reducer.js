import { ADD_FAV, DEL_FAV } from "./actions";

const initialState = {
    myFavourites: [],
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavourites: [...state.myFavourites, action.payload], //El metodo push no devuelve un nuevo array, devuelve la propiedad length, no funciona para controlar la mutacion del store
            };
        case DEL_FAV:
            return {
                ...state,
                myFavourites: state.myFavourites.filter((item) => item.id !== action.payload),
            };
        default:
            return {...state};
    }
};