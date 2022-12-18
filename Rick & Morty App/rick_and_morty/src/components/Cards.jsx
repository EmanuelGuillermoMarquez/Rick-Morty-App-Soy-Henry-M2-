import Card from './Card';
import styles from '../Styles.module.css';


export default function Cards(props) {

   /* const { characters } = props; */
  
   return ( 
      <div className={styles.divCards}>
         
         {/* characters.map(personaje => ( personaje => Card(personaje)))};*/}
         
         {props.characters.map(personaje => (
            <Card 
               key = {personaje.name}
               id={personaje.id}
               name={personaje.name}
               species={personaje.species}
               gender={personaje.gender}
               image={personaje.image}
               onClose={props.onClose}
               />
         ))}

      </div>
   );
   /*el key = {personaje.name} se lo paso en Card tomando props.name*/
}
