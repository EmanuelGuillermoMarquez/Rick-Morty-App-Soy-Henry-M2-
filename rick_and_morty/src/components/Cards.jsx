import Card from './Card';
import styles from '../Styles.module.css';


export default function Cards(props) {
   const { characters } = props;
   return ( 
      <div className={styles.divCards}>
         
         {characters.map(personaje => (Card(personaje)))} {/*el key = {personaje.name} se lo paso en Card tomando props.name*/} 

      </div>
   );
}
