import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <a className={styles.name}>Magic Collections</a>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button>
                        <Link className={styles.link} to="/">Home</Link>
                    </button>
                </li>
                {/* <li className={styles.item}>
                    <button>
                        <Link className={styles.link} to="/deck">Decks</Link>
                    </button>
                </li>
                <li className={styles.item}>
                    <button>
                        <Link className={styles.link} to="/collection">Collection</Link>
                    </button>
                </li> */}
                <li className={styles.item}>
                    <button>
                        <Link className={styles.link} to="/contact">Contact us</Link>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar