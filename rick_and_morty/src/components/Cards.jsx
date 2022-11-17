import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return ( 
      <div>
         
         {characters.map(personaje => (Card(personaje)))} {/*el key = {personaje.name} se lo paso en Card tomando props.name*/} 

      </div>
   );
}
