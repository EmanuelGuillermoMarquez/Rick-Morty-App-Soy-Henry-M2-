export default function Card(props) {
   console.log(props);
   if(!props.onClose) props.onClose = () => window.alert('Default - Emulamos que se cierra la card');
   
   return (
      <div key = {props.name}>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="Imagen del personaje" />
      </div>
   );
}
