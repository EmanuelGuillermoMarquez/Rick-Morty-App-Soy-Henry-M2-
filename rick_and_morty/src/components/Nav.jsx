import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import styles from '../Styles.module.css';

export default function Nav(props) {
    
    
    return (
        <nav className={styles.Nav}>
            <div>
                
                <button className={styles.navButton} onClick={props.logOut}>Log Out</button> 
                
                <SearchBar 
                    onSearch={props.onSearch}
                    onSearchRandom={props.onSearchRandom} 
                />
                

            </div>
        </nav>
    )
}