import React from 'react';
import styles from "../styles/portfolio.module.scss";

export default function Banner(props) {
    return (
        <section className={styles.banner}>
            <div className="container">
                <div className={styles.banner_content}>
                    <h3 className={styles.stroke}>{props.personalInfo.firstName}</h3>
                    <h3>{props.personalInfo.lastName}</h3>
                    <p>{props.personalInfo.role}</p>
                </div>
            </div>
        </section>
    )
}
