import React from 'react';
import SearchBar from './SearchBar';
import styles from '../Styles.module.css';

export default function Nav(props) {
    
    
    return (
        <nav className={styles.Nav}>
            <div>
                <SearchBar 
                    onSearch={props.onSearch}
                    onSearchRandom={props.onSearchRandom} 
                />
            </div>
        </nav>
    )
}