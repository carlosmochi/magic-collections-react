import { useEffect, useState } from 'react'

import styles from './Home.module.css'
import Card from '../cards/Card'
import SearchBar from '../components/SearchBar'
import Pagination from '../layout/Pagination'

function Home(){
    const [cardData, setCardData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("f%3Avintage");
    const [currentPage, setCurrentPage] = useState(1)
    let cardMap = 0
    const [searchURL, setSearchURL] = useState("https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&order=released&page="+currentPage+"&q="+searchValue+"&unique=cards")
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
            setCardData(data)
            if(cardData != null){
                toggleLoading()
            }
            console.log("useEffect data");
            console.log(data)
            console.log(currentPage);
            console.log(isLoading);
        })
        .catch((err) => console.log(err))
    },[searchURL, currentPage])

    function handleChange(e){
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    function searchName(){
        // debugger;
        console.log("searchValue: "+searchValue);
        console.log(searchURL);
        changeURL("", false)
    }
    
    function changeURL(newURL, isURL){
        toggleLoading();
        console.log("Changing URL");
        console.log(searchValue);
        console.log(currentPage);
        if(!isURL){
            (!searchValue 
                ?setSearchURL("https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&order=released&page="+currentPage+"&q=f%3Avintage&unique=cards")
                :setSearchURL("https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&order=released&page="+currentPage+"&q="+searchValue+"&unique=cards"))
        }else{
            setSearchURL(newURL)
        }
        console.log(searchURL);
    }

    function changePage(page){
        console.log("called: "+page);
        // let previousPage = currentPage
        if(page > currentPage){
            if(cardData.has_more){
                // toggleLoading()
                setCurrentPage(page)
                changeURL(cardData.next_page, true)
            }else{
                alert("There are no more pages!")
            }
        }else{
            // toggleLoading()
            setCurrentPage(page)
            changeURL("https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&order=released&page="+page+"&q="+searchValue+"&unique=cards", true)
        }
        
        
        console.log(page);
    }

    return(
        <div className={styles.home}>
            <h1>All cards</h1>
            <SearchBar handleSubmit={searchName} handleChange={handleChange}/>
            <div className={styles.card_view}>
                {isLoading 
                ?console.log("vazio")
                :(cardData.data.map((card) => (
                    card.card_faces === undefined || card.layout == "adventure" || card.layout == "split"
                    ?<Card key={card.id} cardImage={card.image_uris.large} cardName={card.name} doubleFaced={false}/>
                    :<Card key={card.id} cardImage={card.card_faces[0].image_uris.large} cardName={card.name} 
                    bCardImage={card.card_faces[1].image_uris.large} doubleFaced={true}/>
                )
                // cardMap+=1
                // console.log(cardMap);}
                )
                )}
            </div>
            <Pagination cardAmount={JSON.stringify(cardData.total_cards)} currentPage={currentPage} handlePageChange={changePage}/>
        </div>
    )
}

export default Home