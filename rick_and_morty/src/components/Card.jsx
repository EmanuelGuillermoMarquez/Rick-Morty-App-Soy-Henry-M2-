//import styles from './Card.module.css';
import styles from '../Styles.module.css';


export default function Card(props) {
   console.log(props);
   if(!props.onClose) props.onClose = () => window.alert('Default - Emulamos que se cierra la card');
   
   return (
      <div className={styles.divCard} key = {props.name}>
         <button onClick={props.onClose}>X</button>
         <h2 className={styles.h2Title}>{props.name}</h2>
         <h2 className={styles.h2Otro}>{props.species}</h2>
         <h2 className={styles.h2Otro}>{props.gender}</h2>
         <img  src={props.image} alt="Imagen del personaje" />
      </div>
   );
}
