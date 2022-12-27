import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterCards , orderCards } from '../Redux/actions';
import styles from '../Styles.module.css';

function Favorites( {myFavourites} ) {

    const [sortFav, setSortFav] = React.useState([myFavourites]); // Este local state es para que se renderice cuando se actualiza el orden del global state
    
    const dispatch = useDispatch();

    
    /* const [currentIndex, setCurrentIndex] = React.useState(0);

    const carouselScroll = () => {
        currentIndex === myFavourites.length-1
            ? setCurrentIndex(0)
            : setCurrentIndex(currentIndex + 1);
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            carouselScroll()}, 3000);
        return () => clearInterval(interval);
    }); */

  /*   const handleChangeSelect = (e) => {
        if (e.target.name === 'order') dispatch(orderCards(e.target.value));
        else if (e.target.name === 'filter') dispatch(filterCards(e.target.value));
    }
 */

    return (
        <div>
            <select className={styles.favSelect} name='order' onChange={(e) => {
                    dispatch(orderCards(e.target.value));
                    setSortFav([myFavourites]);  // Aca seteamos el state local para que se renderice y actualice el orden
                }}>
                <option defaultValue={null} disabled >Ordenar...</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select className={styles.favSelect} name='filter' onChange={(e) => {dispatch(filterCards(e.target.value))}}>
                <option defaultValue={null} disabled >Filtrar...</option>                
                <option value="all">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>

            <div className={styles.carruselContainer}>
                
                {myFavourites.map(personaje => (
                    <Link to={`/detail/${personaje.id}`} style={{ textDecoration: 'none', color: 'black', }} key = {personaje.id}>
                        <div className={styles.carruselItem} /* style={{transform: `translate(-${currentIndex * 50}%)`}} */ >
                            <img src={personaje.image} alt="Imagen del personaje"/>
                            <h2>{personaje.name}</h2>
                            
                        </div>
                    </Link>
                    
                
                ))}

            </div>
        </div>
    )
};

export function mapState(state) {
    return {
        myFavourites: state.myFavourites,
    }
};

export default connect(mapState, null)(Favorites);