import React from 'react';
import styles from '../../styles/components/NotFound.module.scss'
import {Link} from 'react-router-dom'


function NotFound() {
    return (
        <div className={styles.root}>
            <p className={styles.title}>Страница не доступна.</p>
            <Link to='/'>
                <b>Вернуться назад.</b>
            </Link>
        </div>

    )
}

export default NotFound;