import React from 'react';
import styles from '../../styles/components/WeaponPage.module.scss'
import {Link, useParams} from 'react-router-dom'
import IconCsGo from '../../assets/img/csgo.jpg'
import axios from "axios";


function WeaponPage() {
    const [weapon, setWeapon] = React.useState([])
    const {id} = useParams();

    React.useEffect(() => {
        async function fetchData() {
            const weaponsResponse = await axios.get(`http://localhost:5000/steam-store-items/${id}`)
            setWeapon(weaponsResponse.data)
        }

        fetchData()
    }, [])


    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__linked}>
                <p>
                    <Link to='/'>
                        Counter-Strike: Global Offensive >
                    </Link>
                </p>
                <b>{weapon.name}</b>
            </div>
            <div className={styles.container}>
                <div className={styles.container__info}>
                    <div className={styles.img}>
                        <img src={weapon.imgBig} alt="item-ico"/>
                    </div>
                    <div className={styles.info}>
                        <p>{weapon.name}</p>
                        <div className={styles.game}>
                            <img src={IconCsGo} alt="cs-go-logo"/>
                            <div className={styles.wrap}>
                                <p> Counter-Strike: Global Offensive</p>
                                <p>{weapon.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeaponPage;