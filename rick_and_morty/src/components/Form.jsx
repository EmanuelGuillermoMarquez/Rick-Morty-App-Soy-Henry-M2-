import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles.module.css';

export default function Form (props) {

    const navigate = useNavigate();
    
    /* const handleClickBack = () => navigate(-1); */

    function validateUser (input) {
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,10})/
        const error = {};

        if (!input.email) error.email = "Debe ingresar su email";
        if (!regexEmail.test(input.email)) error.email = "Ingrese un email valido";
        if (input.email?.length > 35) error.email = "El usuario no puede contener mas de 35 caracteres";

        if (!input.password) error.password = "Debe ingresar su contraseña";
        if (!regexPassword.test(input.password)) error.password = "Ingrese una contraseña valida";
        if (input.password?.length < 6 && input.password === 0) error.password = "Ingrese una contraseña valida mayor a 6 caracteres";
        if (input.password?.length > 10) error.password = "Ingrese una contraseña valida menor a 10 caracteres";
        return error;
    }

    const [userData, setUserData] = React.useState({
        email: '',
        password: '',
      });
    
      const [userError, setUserError] = React.useState({
        email: '',
        password: '',
      });
    
      const handleInputChange = (e) => {
        setUserData( {...userData, [e.target.name]: e.target.value} );
        setUserError( validateUser({...userData, [e.target.name]: e.target.value}) );
       /*  console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value) */
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Clickeaste Login');
        props.logIn(userData);

      }
    
  
    return ( 

        <div className={styles.form}>

            <form className={styles.formContainer} onSubmit={handleSubmit}>

                <label> Username/Correo Electrónico: </label>

                <input className={userError.email ? styles.errorInput : styles.logInInput} type="text" name='email' value={userData.email} placeholder='Ingrese su correo electrónico...' onChange={handleInputChange}/>

                <p className={styles.errorP} >{userError.email}</p>

                <label> Contraseña: </label>

                <input className={userError.email ? styles.errorInput : styles.logInInput} type="password" name='password' value={userData.password} placeholder='Ingrese su contraseña...' onChange={handleInputChange}/>

                <p className={styles.errorP} >{userError.password}</p>

                <button className={styles.logInButton}>Log in</button>
                
            </form>
        </div>
    
   );

}