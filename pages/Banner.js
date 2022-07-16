import React from 'react';
import styles from "../styles/portfolio.module.scss";

export default function Banner({ personalInfo }) {
    return (
        <section className={styles.banner}>
            <div className="container">
                {personalInfo && (
                    <div className={styles.banner_content}>
                        <h3 className={styles.stroke}>{personalInfo.firstName}</h3>
                        <h3>{personalInfo.lastName}</h3>
                        <p>{personalInfo.role}</p>
                    </div>
                )}
            </div>
        </section>
    )
}
