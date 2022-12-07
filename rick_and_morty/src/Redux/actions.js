export const ADD_FAV = "ADD_FAV";
export const DEL_FAV = "DEL_FAV";


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