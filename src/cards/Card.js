import { useState } from 'react'
import { GiCardPlay } from 'react-icons/gi'
import styles from './Card.module.css'

function Card(){
    const [showCard, setShowCard] = useState(true)
    let cardName = "Elesh Norn, Grand Cenobite"
    let cardCost = "4WW";
    let cardTypes = "Creature - Phyrexian Preator"
    let oracleText = "Vigilance Other creatures you control get +2/+2 Creatures your oponents control get -2/-2"

    function click(e){
        e.preventDefault()
        setShowCard(!showCard)
    }
    return(
        <div className={styles.card}>
                    {showCard == true 
                        ?<a onClick={click} href='#'>
                            <img className={styles.card_image} src='https://cards.scryfall.io/large/front/7/8/78c2bfef-06a5-4c7f-8283-ea3fb673b7a1.jpg?1562850573' />
                        </a>
                        :
                        <div className={styles.card_actions}>
                            <div className={styles.card_details}>
                                <button onClick={click}>
                                    <p>{cardName}</p>
                                    <p>{cardCost}</p>
                                    <br/>
                                    <p>{cardTypes}</p>
                                    <p>{oracleText}</p>
                                </button>
                            </div>
                            <button><GiCardPlay/> Add to Collection</button>
                        </div>
                    }
        </div>
    )
}

export default Card