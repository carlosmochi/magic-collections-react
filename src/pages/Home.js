import { useEffect, useState } from 'react'

import styles from './Home.module.css'
import Card from '../cards/Card'
import SearchBar from '../components/SearchBar'

function Home(){
    const [cardData, setCardData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("");
    let searchURL = "https://api.scryfall.com/cards/search?q=f%3Avintage&page=1&order=released&pretty&unique";
    var count = 0

    function toggleLoading(){
        setIsLoading(!isLoading)
    }

    useEffect(() => {
        fetch( searchURL,{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(resp => resp.json())
        .then((data) => {
            setCardData(data.data)
            toggleLoading()
            console.log(data)
        })
        .catch((err) => console.log(err))
    }, [])

    function handleChange(e){
        setSearchValue(e.target.value)
    }

    function searchName(){
        console.log("searchValue: "+searchValue);
        toggleLoading();
        (searchValue 
            ?searchURL = "https://api.scryfall.com/cards/search?q="+searchValue+"&page=1&order=released&pretty&unique"
            :searchURL = "https://api.scryfall.com/cards/search?q=f%3Avintage&page=1&order=released&pretty&unique")
            fetch( searchURL,{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(resp => resp.json())
            .then((data) => {
                setCardData(data.data)
                setIsLoading(false)
                console.log(data)
            })
            .catch((err) => console.log(err))
    
    }

    return(
        <div className={styles.home}>
            <h1>All cards</h1>
            <SearchBar handleSubmit={searchName} handleChange={handleChange}/>
            <div className={styles.card_view}>
                {isLoading 
                ?console.log("vazio")
                :(cardData.map((card) => (
                    <Card key={card.id} cardImage={card.image_uris.large} cardCost={card.mana_cost} cardName={card.name} cardTypes={card.type_line} oracleText={card.oracle_text}/>
                )))}
            </div>
        </div>
    )
}

export default Home