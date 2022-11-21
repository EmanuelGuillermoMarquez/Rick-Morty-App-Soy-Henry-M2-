import styles from '../Styles.module.css';

export default function SearchBar(props) {
   return (
      <div className={styles.divSearch}>
         <input type='search' />
         {/* <button onClick={() => props.onSearch("Futuro ID del personaje")}>Agregar</button> */}
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
