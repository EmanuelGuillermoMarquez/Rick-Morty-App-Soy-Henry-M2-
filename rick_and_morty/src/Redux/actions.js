export const ADD_FAV = "ADD_FAV";
export const DEL_FAV = "DEL_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


export function addFavourite(character) {
    return {
        type: ADD_FAV,
        payload: character,
    }
};

export function delFavourite(characterId) {
    return {
        type: DEL_FAV,
        payload: characterId,
    }
};

export function filterCards(status) {
    return {
        type: FILTER,
        payload: status,
    }
};

export function orderCards(order) {
    return {
        type: ORDER,
        payload: order,
    }
};