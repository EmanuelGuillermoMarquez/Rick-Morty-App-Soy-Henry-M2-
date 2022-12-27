import React from 'react';
import styles from '../Styles.module.css';
import { NavLink } from 'react-router-dom';

export default function SearchBar(props) {

   const [characterID, setCharacterID] = React.useState("")

   const handleInputChange = (e) => setCharacterID(e.target.value);

   return (

      <div className={styles.divSearch}>

         {/* <NavLink className={styles.active} to="/home"><button className={styles.navButton}>Home</button></NavLink>

         <NavLink to="/favorites"><button className={styles.navButton}>Favorites</button></NavLink>

         <NavLink to="/about"><button className={styles.navButton}>About!</button></NavLink> */}

         <input id='searchInput' type='search' placeholder='  Ingrese un numero de ID' onChange={handleInputChange}/>
        
         <button className={styles.navButton} onClick={() => props.onSearch(characterID)}>Agregar</button>

         <button className={styles.navButton} onClick={props.onSearchRandom}>Random!</button> 

      </div>
   );
}
