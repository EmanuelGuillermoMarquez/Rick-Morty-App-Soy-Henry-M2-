import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation, Routes , Route } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';
import './App.css';
//import Card from './components/Card.jsx';
import Form from './components/Form';
import Detail from './components/Detail';
import About from './components/About';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import Error404 from './components/404.jsx';
//import SearchBar from './components/SearchBar.jsx';
/* import characters, { Rick } from './data.js'; */
import styles from './Styles.module.css';


function App () {

  const location = useLocation();
  //console.log(location);

  const navigate = useNavigate();

  const [userAccess, setUserAccess] = React.useState(false);
  const userName = "marquezema127@gmail.com";
  const password = "Emanuel98";

  function logIn (userData) {
    if (userData.email === userName && userData.password === password) {
      setUserAccess(true);
      navigate("/home");
    }
    else window.alert("Las credenciales ingresadas no son validas")
  }

  function logOut () {
    window.alert("Esta cerrando su sesión")
    setUserAccess(false);
      navigate("/");
  }

  useEffect(() => {
    !userAccess && navigate('/');
  }, [userAccess]);

  
  
  const [characters, setCharacters] = React.useState([]);
    
  const onSearch = (characterID) => {
    characters.some(item => item.id == characterID)
      ? window.alert('Ese personaje ya existe, ingrese otro ID')
      : fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);                         // oldChars es igual a prevState
            console.log(`El personaje ID ${characterID} ha sido agregado`);   
          } 
          else {
            window.alert('No hay personajes con ese ID');
          }
      });
    document.getElementById('searchInput').value=null;
  };

  const onSearchRandom = () => {
    const characterID =  Math.round(Math.random() * 826);
    characters.some(item => item.id == characterID)
      ? window.alert('Ese personaje ya existe, ingrese otro ID')
      : fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);                 // oldChars es igual a prevState
            console.log(`El personaje ID ${characterID} ha sido agregado`);     
          } 
          else {
            window.alert('No hay personajes con ese ID');
          }
      });
  };
  

  const onClose = (characterID) => {
    setCharacters(characters.filter(item => item.id !== characterID));
    console.log(characters);
    console.log(`El personaje ID ${characterID} ha sido eliminado`);

    /* let indexToDel = characters.indexOf(characters.filter(item => item.id === characterID));
    setCharacters([characters.splice(indexToDel)]); */
  }

  return (  
    <div className={styles.divApp}>
      <div>
        {location.pathname !== '/' && <Nav 
          onSearch={onSearch}
          onSearchRandom={onSearchRandom}
          logOut={logOut}
          />}
      </div>
      <hr />
      <div className={styles.divGeneric}>
      <Routes>

        <Route path='/' element= {
          <Form 
            logIn={logIn} 
          />
        } />

        <Route path='/home' element= {
          <Cards
            characters={characters} 
            onClose={onClose}
          />
        }>
        </Route>

        <Route path='/detail/:detailId' element= {<Detail/>}></Route>

        <Route path='/about' element= {<About/>} />

        <Route path='*' element= {<Error404/>} />

      </Routes>
      </div>
      <hr />
      <footer className={styles.credits}>
        <h4>Creado con mucho coffe por Emanuel</h4>
      </footer>
    </div>
  )
}

export default App
