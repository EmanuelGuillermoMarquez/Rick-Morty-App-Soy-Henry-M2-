import styles from '../Styles.module.css';
import { useNavigate } from 'react-router-dom';
import personalImg from './resources/personal.jpg'

export default function About(props) {

    const navigate = useNavigate();
    
    const handleClick = () => navigate(-1);
  
    return ( 

        <>
        <button className={styles.detailBackButton} onClick={handleClick}>Volver</button>
        <div className={styles.about}>
            <div>
                <img src={personalImg} alt="Imagen del creador"/>
            </div>
            <div className={styles.divDescription}>     
                <h2>Emanuel Guillermo Marquez</h2>
                <h3>Bienvenidos a mi app de Rick & Morty desarrollada en el marco del curso FullStack Web Devoloper de Soy Henry. Espero sea de su agrado...</h3>
                <h4>Ademas de estar comenzando en el ambito del desarrollo web soy abogado, graduado a finales del año 2019 en la Universidad Nacional del Litoral, ejerciendo actualmente como asesor legal del Hospital Dr. Jose Maria Cullen y como abogado litigante. No dudes en contactarte por asesoramiento tech o legal.</h4>
            </div>
        </div>
        <h4 style={{color: "aliceblue"}} >Pueden seguirme en mis redes:</h4>
        <div className={styles.redes}> 
            <div className={styles.redes}>
                <img className={styles.logo}  src="https://cdn-icons-png.flaticon.com/512/4922/4922972.png" alt="ig" /><a href="https://www.instagram.com/emaamarqez">Instagram/EmanuelMarquez</a>
            </div>
            <div className={styles.redes}>    
                <img className={styles.logo}  src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="ld" /><a href="https://www.linkedin.com/in/emanuelmarquez">Linkedin/EmanuelMarquez</a>
            </div>
        </div>
      </>
    
   );

}