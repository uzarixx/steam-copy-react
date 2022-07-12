import React from 'react'
import ReactPaginate from "react-paginate";
import styles from '../../../styles/components/Pagination.module.scss'

const Pagination = ({ onChangePage, pageCount }) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={e=>onChangePage(e.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination;