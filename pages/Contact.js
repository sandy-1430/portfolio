import React from 'react';
import styles from "../styles/portfolio.module.scss";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
    return (
        <section className={`${styles.contacts}`}>
            <div className="container">
                <div className={styles.contactTitle}>
                    <h3 className="title_txt">Get in Touch <span>Contact</span></h3>
                </div>
                <div className="d_flex flex_wrap just_btn">
                    <div className={styles.contactForm}>
                        <form>
                            <div className={styles.inputText}>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className={styles.inputText}>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className={styles.inputText}>
                                <input type="text" placeholder="Number" />
                            </div>
                            <div className={styles.inputText}>
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="black_btn">Send Message</button>
                        </form>
                    </div>
                    <div className={styles.contactDetails}>
                        <div className={styles.details_list}>
                            <h3>Phone</h3>
                            <p><a href="tel:+918124667482">+91 8124667482</a></p>
                        </div>
                        <div className={styles.details_list}>
                            <h3>Email</h3>
                            <p><a href="mailto:sathishsandy8124@gmail.com">sathishsandy8124@gmail.com</a></p>
                        </div>
                        <div className={styles.details_list}>
                            <h3>Social Links</h3>
                            <div className={`${styles.socialIcons} d_flex`}>
                                <a href="#"><FacebookRoundedIcon className={styles.icons} /></a>
                                <a href="#"><InstagramIcon className={styles.icons} /></a>
                                <a href="#"><LinkedInIcon className={styles.icons} /></a>
                                <a href="#"><GitHubIcon className={styles.icons} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
