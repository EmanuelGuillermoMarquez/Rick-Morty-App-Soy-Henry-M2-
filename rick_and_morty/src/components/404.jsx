import styles from '../Styles.module.css';
import { useNavigate } from 'react-router-dom';
//import ErrorImg from './resources/error.jpg';

export default function Error404(props) {

    const navigate = useNavigate();
    
    const handleClickBack = () => navigate(-1);
    const handleClickHome = () => navigate("/");
  
    return ( 

        <>
        <div className={styles.error}>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/3980/3980131.png" alt="error404"/>
            </div>
            <div className={styles.divDescription}>     
                <h2>Error 404</h2>
                <h3>Lo sentimos, la pagina que estas buscando no esta disponible.</h3>
            </div>
        </div>
        <button className={styles.detailBackButton} onClick={handleClickBack}>Volver</button>
        <button className={styles.detailBackButton} onClick={handleClickHome}>Home</button>
      </>
    
   );

}