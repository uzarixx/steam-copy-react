import React from 'react';
import styles from '../../../styles/components/Search.module.scss'


function Search({search, setSearch}) {
    return (
        <div className={styles.search}>
            <p>Поиск предметов</p>
            <div className={styles.wrap}>
            <input
                value={search}
                type="text"
                placeholder={'Поиск'}
                onChange={ev => setSearch(ev.target.value)}
            />
                {search &&
                <b
                onClick={()=>setSearch('')}
                >
                    X
                </b>
                }
            </div>
        </div>
    )
}

export default Search;