import styles from './Home.module.css'
import Card from '../cards/Card'

function Home(){
    return(
        <div className={styles.home}>
            <h1>All cards</h1>
            <div className={styles.card_view}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Home