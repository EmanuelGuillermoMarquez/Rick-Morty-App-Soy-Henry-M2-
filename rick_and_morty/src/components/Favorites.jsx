import React from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import Card from './Card';
import styles from '../Styles.module.css';

function Favorites({myFavourites}) {



    return (

        <div className={styles.divCards}>
            
            {myFavourites.map(personaje => (
                <Card 
                    key = {personaje.name}
                    id={personaje.id}
                    name={personaje.name}
                    species={personaje.species}
                    gender={personaje.gender}
                    image={personaje.image}
                    onClose={() => window.alert('Para cerrar la card debes volver al home!')}
                />
            ))}

        </div>

    )
};

export function mapState(state) {
    return {
        myFavourites: state.myFavourites,
    }
};

export default connect(mapState, null)(Favorites);