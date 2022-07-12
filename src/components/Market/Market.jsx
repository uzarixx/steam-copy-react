import React from 'react';
import axios from "axios";
import Sort from './Sort/Sort'
import Weapon from './Weapon/Weapon'
import Skeleton from "./Weapon/Skeleton";
import Search from "./Search/Search";
import styles from '../../styles/components/Market.module.scss'
import Pagination from "./Pagination/Pagination";




function Market() {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [search, setSearch] = React.useState('')
    const [paginationPage, setPaginationPage] = React.useState(1)
    const [count, setCount] = React.useState(0)
    const [sortType, setSortType] = React.useState({
        sortProperty: 'name',
        asc: false
    })

    const PAGE_LIMIT = 5;

    React.useEffect(() => {
        setPaginationPage(1)
    }, [search])

    React.useEffect(() => {
        async function fetchData() {
            const order = sortType.asc ? 'asc' : 'desc'
            setIsLoading(true)
            const weaponsResponse = await axios.get(`http://localhost:5000/steam-store-items`, {
                params: {
                    _page: paginationPage,
                    _limit: 5,
                    name_like: search,
                    _sort: sortType.sortProperty,
                    _order: order
                }
            })
            setCount(+weaponsResponse.headers["x-total-count"])
            setIsLoading(false)
            setItems(weaponsResponse.data)
        }

        fetchData()
    }, [search, paginationPage, sortType])


    return (
        <div className={styles.wrapper}>
            <h2>Все лоты</h2>
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <Sort setSortType={i => setSortType(i)}/>
                    {
                        isLoading ?
                            ([...new Array(5)].map((_, i) => <Skeleton key={i}/>))
                            :
                            items.filter(obj => obj.name.toLowerCase().includes(search.toLowerCase())).map((obj, i) =>
                                (<Weapon key={i} {...obj}/>))
                    }
                    <Pagination onChangePage={n => setPaginationPage(n)} pageCount={Math.ceil(count / PAGE_LIMIT)}/>
                </div>
                <div className={styles.right}>
                    <Search search={search} setSearch={setSearch}/>
                </div>
            </div>
        </div>
    )
}

export default Market;

