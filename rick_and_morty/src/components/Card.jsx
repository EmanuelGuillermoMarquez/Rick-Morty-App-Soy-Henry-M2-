import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavourite, delFavourite } from '../Redux/actions';
import styles from '../Styles.module.css';


function Card(props /* , {addFavourite} , {delFavourite}  */) {

   console.log(props);
   
   const addFavourite = props.addFavourite;
   const delFavourite = props.delFavourite;
   const myFavourites = props.myFavourites;
   
   console.log(myFavourites);
   

   const [isFav, setIsFav] = React.useState(false);

   const handleFavourite = () => {
      if (isFav) {
         setIsFav(false);
         delFavourite(props.id);
      }
      else {
         setIsFav(true);
         addFavourite(props);
      }
   }

   React.useEffect(() => {
      myFavourites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavourites]);
   
   return (
      <div className={styles.divCard} >
         {
            isFav 
               ? (<button onClick={handleFavourite}>❤️</button>) 
               : (<button onClick={handleFavourite}>🤍</button>)
         }
         <button onClick={() => props.onClose(props.id)}>❌</button>           
         <h2 className={styles.h2Title}>{props.name}</h2>
         <h2 className={styles.h2Otro}>{props.species}</h2>
         <h2 className={styles.h2Otro}>{props.gender}</h2>
         <Link to={`/detail/${props.id}`} style={{ textDecoration: 'none', color: 'black', }}>
            <img  src={props.image} alt="Imagen del personaje" />
         </Link>
      </div>
   )
};

export function mapDispatch(dispatch) {
   return {
      addFavourite: (character) => {
         dispatch(addFavourite(character))
      },
      delFavourite: (characterId) => {
         dispatch(delFavourite(characterId))
      },
   }
};

export function mapState(state) {
   return {
      myFavourites: state.myFavourites,
   }
};

export default connect(mapState, mapDispatch)(Card);
