'use client'

import { getFetchData } from 'services/analytics/query';
import { useEffect, useState } from 'react';

import styles from './home.module.scss'


export async function FetchSection() {
    const [titleFetch, setTitleFetch] = useState('');

    // const onClickHandler = async () => {
    //     try {
    //         const response = await getFetchData()
    //         setTitleFetch(response[0].title.rendered) 
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <section className={styles.block}>
            <h2>Query</h2>
            <div>{titleFetch}</div>
            <button className={styles.blockButton} >
                Axios Client Query
            </button>
        </section>
    )
}