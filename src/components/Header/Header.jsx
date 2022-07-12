import React from 'react';
import styles from '../../styles/components/Header.module.scss'
import Logo from '../../assets/img/logo.png'
import Avatar from '../../assets/img/avatar.png'
import {Link} from 'react-router-dom'

function Header() {
    return (

        <header>
            <Link to='/' className={styles.logo}>
                <img src={Logo} alt="logo-in-header"/>
            </Link>
            <div className={styles.main}>
                <div className={styles.main__wrap}>
                    <div className={styles.wrap__left}>
                        <h1>Торговая площадка</h1>
                        <p>
                            Продавайте предметы участникам сообщества или приобретайте их, используя средства из
                            кошелька Steam
                        </p>
                    </div>
                    <div className={styles.wrap__right}>
                        <div className={styles.avatar}>
                            <img src={Avatar} alt="avatar-in-header"/>
                        </div>
                        <div className={styles.info}>
                            <p>Баланс кошелька 414,10 ₴</p>
                            <p>Просмотреть инвентарь</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;