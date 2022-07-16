import React from 'react';
import styles from "../styles/portfolio.module.scss";
import Image from 'next/image';


export default function Services({ serviceUtils }) {
    return (
        <section className={`${styles.services}`}>
            <div className="container">
                <div className={styles.serviceTitle}>
                    <h3 className="title_txt">Services <span>Services</span></h3>
                </div>
                <div className="d_flex just_btn flex_wrap">
                    {serviceUtils &&
                        serviceUtils.map((list, index) => (
                            <div key={index} className={styles.service_list}>
                                <Image className={styles.service_img} src={list.serviceIcon.url} alt="" />
                                <div className={styles.service_cnt}>
                                    <h4>{list.serviceTitle}</h4>
                                    <p>{list.serviceDesc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
