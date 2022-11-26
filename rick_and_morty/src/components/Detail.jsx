import React , { useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import styles from '../Styles.module.css';
//import { useEffect } from 'react';



export default function Detail(props) {

    const [characterDetails, setCharacterDetails] = React.useState({});

    const {detailId} = useParams();  // Aca estoy destructurando el objeto, para ello const debe ser un objeto que denominado igual que el path dinamico "/:detailId" sino no funciona. Se puede usar directamente sin destructuring -> const detailId = useParams() - pero cuando accedamos a el vamos a tener que buscar nuestro path dinamico dentro del objeto -> ${detailId.detailId} -

    const navigate = useNavigate();
    
    const handleClick = () => navigate(-1);

    console.log(detailId);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacterDetails(char);
                } 
                else {
                    window.alert('No hay personajes con ese ID');
                    navigate("*");
                }
            })
            .catch((err) => {
                window.alert('No hay personajes con ese ID');
            });
        return setCharacterDetails({});
    }, [detailId]);

    
    console.log(characterDetails.origin?.name);

    /* console.log(Object.values(characterDetails.origin)); */
    
    return (
        <>
        <button className={styles.detailBackButton} onClick={handleClick}>Volver</button>
        <div className={styles.detail}>
            <div>
                <img  src={characterDetails.image} alt="Imagen del personaje"/>
            </div>
            <div>     
                <h2 className={styles.detail}>{characterDetails.name}</h2>
                <h3 className={styles.detail}>Specie: {characterDetails.species}</h3>
                <h3 className={styles.detail}>Gender: {characterDetails.gender}</h3>
                <h3 className={styles.detail}>Origin: {characterDetails.origin?.name}</h3>
                <h3 className={styles.detail}>Status: {characterDetails.status}</h3>
            </div>
      </div>
      </>
    )




}