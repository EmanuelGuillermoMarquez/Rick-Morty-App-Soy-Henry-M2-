import React from 'react';
import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
//import SearchBar from './components/SearchBar.jsx';
/* import characters, { Rick } from './data.js'; */
import styles from './Styles.module.css';


function App () {
  
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
        <Nav 
          onSearch={onSearch}
          onSearchRandom={onSearchRandom}
          />
      </div>
      <hr />
      <div className={styles.divGeneric}>
        <Cards
          characters={characters} 
          onClose={onClose}
        />
      </div>
      <hr />
      <footer className={styles.credits}>Creado con mucho coffe por Emanuel</footer>
    </div>
  )
}

export default App
