import React, { useState } from 'react'
import styles from "../styles/portfolio.module.scss";
import Modal from './Modal';
import Image from 'next/image';

export default function Portfolio({ workUtils }) {
    const [open, setOpen] = useState(false);
    const [work, setWork] = useState();

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = (project) => {
        setOpen(true);
        setWork(project);
    };

    return (
        <div className={styles.work}>
            <div className="container">
                <div className={styles.workTitle}>
                    <h3 className="title_txt">Featured Work <span>Portfolio</span></h3>
                </div>
                <div className="d_flex flex_wrap just_btn">
                    {workUtils && workUtils.map((work, index) => (
                        <div key={index} className={styles.work_list}>
                            <a onClick={() => handleClickOpen(work)}>
                                <figure className={styles.work_img}>
                                    <Image src={work.projectImg.url} alt="" width="100%" />
                                </figure>
                                <p>{work.projectType}</p>
                                <h5>{work.projectTitle}</h5>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Modal handleClose={handleClose} open={open} work={work} />
        </div >
    )
}
