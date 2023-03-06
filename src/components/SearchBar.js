import styles from './SearchBar.module.css'
// import {FaSearch} from "react-icons/fa"
import { useState } from 'react';

function SearchBar({handleSubmit, handleChange}){
    function submit(e){
        e.preventDefault();
        handleSubmit()
    }


    return (
        <div>
            <form className={styles.form} onSubmit={submit}>
                <input 
                    className={styles.search} 
                    placeholder="Pesquise por nome, tipo, coleção, etc..." 
                    type="search" 
                    name="search" 
                    onChange={handleChange}></input>
            </form>
        </div>
    )
}

export default SearchBar;