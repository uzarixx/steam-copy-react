import React from 'react';
import styles from '../../../styles/components/Sort.module.scss'


function Sort({setSortType}) {

    const list = [
        {name: 'НАЗВАНИЕ', sortProperty: 'name'},
        {name: 'КОЛ-ВО', sortProperty: 'value'},
        {name: 'ЦЕНА', sortProperty: 'price'},
    ]
    return (
        <div className={styles.sort}>
            <ul>
                {
                    list.map((obj, i) => (
                        <li
                            key={i}
                            onClick={()=> setSortType(o=>({sortProperty: obj.sortProperty, asc: !o.asc}))}
                        >
                            {obj.name}
                        </li>
                    ))

                }
            </ul>
        </div>
    )
}

export default Sort;