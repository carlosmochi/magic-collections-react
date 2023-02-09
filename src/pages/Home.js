import { useEffect, useState } from 'react'

import styles from './Home.module.css'
import Card from '../cards/Card'

function Home(){
    const [cardData, setCardData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    var count = 0
    useEffect(() => {
        fetch("https://api.scryfall.com/cards/search?q=f%3Avintage&page=1&order=released&pretty&unique",{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(resp => resp.json())
        .then((data) => {
            setCardData(data.data)
            setIsLoading(false)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <div className={styles.home}>
            <h1>All cards</h1>
            <div className={styles.card_view}>
                {isLoading 
                ?console.log("vazio")
                :( cardData.map((card) => (
                    <Card key={card.id} cardImage={card.image_uris.large}/>
                )))}
            </div>
        </div>
    )
}

export default Home