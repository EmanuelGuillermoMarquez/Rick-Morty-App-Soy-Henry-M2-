import styles from '../Styles.module.css';
import { useNavigate } from 'react-router-dom';
//import ErrorImg from './resources/error.jpg';

export default function MyPortafolio(props) {

    const navigate = useNavigate();
    
    const handleClickBack = () => navigate(-1);
    const handleClickHome = () => navigate("/home");
  
    return ( 

        <>
        <div className={styles.error}>
            <div className={styles.divDescription}>     
                <h2>Esta pagina esta en construcción. Proximamente...</h2>
            </div>
        </div>
        <button className={styles.detailBackButton} onClick={handleClickBack}>Volver</button>
        <button className={styles.detailBackButton} onClick={handleClickHome}>Home</button>
      </>
    
   );

}