import { useMemo, useState, useEffect } from "react"
import styles from './Pagination.module.css'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'


function Pagination({cardAmount, currentPage, handlePageChange}){
    
    const [totalCards, setTotalCards] = useState([0])
    const [totalPages, setTotalPages] = useState([1])
    var pages = 1

    // useEffect(() => {
    //     setTotalCards(cardAmount)
    //     {totalCards > 0 
    //         ?(pages = parseInt(JSON.parse(totalCards) / 175)) 
    //         :console.log("No cards Found");}        
    //     console.log("updated Pagination")
    //     setTotalPages(pages)
    // },[totalPages])

    console.log(cardAmount);

    const nextPage = (e) => {
        e.preventDefault()
        // console.log(totalPages);  
        // setTotalPages(pages)
        handlePageChange(currentPage+1)
    }
    
    function previousPage(e){
        e.preventDefault()
        currentPage <=1
            ?alert("Already at first page")
            :handlePageChange(currentPage-1)
    }

    return( 
            <div className={styles.pagination}>
                <button onClick={previousPage}><FaArrowLeft className={styles.icons} /><p>Previous Page</p></button>
                <button onClick={nextPage}><p>Next Page</p><FaArrowRight className={styles.icons}/></button>
            </div>
        )
}

export default Pagination