import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import styles from '../Styles.module.css';

export default function Nav(props) {
    
    
    return (
        <nav className={styles.Nav}>
            
            <button className={styles.navButton} onClick={props.logOut}>Log Out</button> 

            <NavLink className={styles.active} to="/home"><button className={styles.navButton}>Home</button></NavLink>

            <NavLink to="/favorites"><button className={styles.navButton}>Favorites</button></NavLink>

            <NavLink to="/about"><button className={styles.navButton}>About!</button></NavLink>

            <SearchBar 
                onSearch={props.onSearch}
                onSearchRandom={props.onSearchRandom} 
            />
            
            
        </nav>
    )
}