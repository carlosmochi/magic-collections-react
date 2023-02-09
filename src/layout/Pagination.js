import { useMemo } from "react"


function Pagination(totalCount, pageSize, siblingCount = 1, currentPage){
    const paginationRange = useMemo(() => {

    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
}

export default Pagination