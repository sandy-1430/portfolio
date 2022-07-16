import React from 'react';
import styles from "../styles/portfolio.module.scss";
import Image from 'next/image';


export default function About({ personalInfo, aboutUtils }) {
    return (
        <section className={styles.about}>
            <div className="container">
                <div className="d_flex flex_wrap just_btn align_center">
                    <div className={styles.about_img}>
                        <Image src="images/about.jpg" alt="" width="100%" />
                    </div>
                    <div className={styles.about_cnt}>
                        {personalInfo && (
                            <>
                                <div className={styles.aboutTitle}>
                                    <h3 className="title_txt">{personalInfo.firstName} {personalInfo.lastName} <span>ABOUT</span></h3>
                                    <p>{personalInfo.role}</p>
                                </div>
                                <p>{aboutUtils.describeMe}</p>
                            </>
                        )
                        }
                        <button className="black_btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
