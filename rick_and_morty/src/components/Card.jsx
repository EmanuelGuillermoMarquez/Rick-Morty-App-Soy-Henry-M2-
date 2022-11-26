//import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import styles from '../Styles.module.css';


export default function Card(props) {

   console.log(props);  
   
   return (
      <div className={styles.divCard} >
         <button onClick={() => props.onClose(props.id)}>X</button>           
         <h2 className={styles.h2Title}>{props.name}</h2>
         <h2 className={styles.h2Otro}>{props.species}</h2>
         <h2 className={styles.h2Otro}>{props.gender}</h2>
         <Link to={`/detail/${props.id}`} style={{ textDecoration: 'none', color: 'black', }}>
            <img  src={props.image} alt="Imagen del personaje" />
         </Link>
      </div>
   );
}
