import { useState } from 'react'
import { GiCardPlay } from 'react-icons/gi'
import styles from './Card.module.css'

function Card({cardImage, cardName, bCardImage, doubleFaced}){
    const [frontFace, setFrontFace] = useState(true)
    function click(e){
        e.preventDefault()
        console.log(frontFace);
        setFrontFace(!frontFace)
    }
    return(
        <div className={styles.card}>
                    {doubleFaced == true
                        ?(frontFace == true 
                            ?<a onClick={click} href='#'>
                                <img className={styles.card_image} src={cardImage} />
                            </a>
                            :
                            <a onClick={click} href='#'>
                                <img className={styles.card_image} src={bCardImage}/>
                            </a>)
                        :(
                            <a href='#'>
                                <img className={styles.card_image} src={cardImage} />
                            </a>
                        )
                    }
                    <div className={styles.card_details}>
                        <h3 className={styles.card_name}>{cardName}</h3>
                        <button><GiCardPlay/> Add to Collection</button>
                    </div>
        </div>
    )
}

export default Card