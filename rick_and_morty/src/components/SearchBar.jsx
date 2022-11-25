import React from 'react';
import styles from '../Styles.module.css';

export default function SearchBar(props) {

   const [characterID, setCharacterID] = React.useState("")

   const handleInputChange = (e) => setCharacterID(e.target.value);

   return (

      <div className={styles.divSearch}>

      <button onClick={props.onSearchRandom}>Random!</button>

         <input id='searchInput' type='search' placeholder='  Ingrese un numero de ID' onChange={handleInputChange}/>
        
         <button onClick={() => props.onSearch(characterID)}>Agregar</button>

      </div>
   );
}
