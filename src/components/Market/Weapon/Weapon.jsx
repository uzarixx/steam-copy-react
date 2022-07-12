import React from 'react';
import styles from '../../../styles/components/Weapon.module.scss'
import {Link} from "react-router-dom";


function Weapon({img, name, price, value, id}) {
    return (
        <Link to={`/item/${id}`}>
            <div className={styles.card}>
                <div className={styles.card__left}>
                    <div className={styles.img}>
                        <img src={img} alt=""/>
                    </div>
                    <div className={styles.info}>
                        <b>{name}</b>
                        <p>Counter-Strike: Global Offensive</p>
                    </div>
                </div>
                <div className={styles.card__right}>
                    <div className={styles.amount}>
                        <p>{value.toLocaleString('ru-RU')}</p>
                    </div>
                    <div className={styles.price}>
                        <b>От</b>
                        <p>{price.toLocaleString('ru-RU')}₴</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Weapon;