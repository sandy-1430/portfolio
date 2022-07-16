import React from 'react';
import styles from "../styles/portfolio.module.scss";
import { Dialog, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Modal({ work, open, handleClose }) {
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xl"
                className={styles.workModal}
            >
                <DialogContent>
                    <a onClick={handleClose} className={styles.modalclose_icon}>
                        <CloseIcon />
                    </a>
                    {
                        work && (
                            <div className="d_flex flex_wrap align_center just_btn">
                                <div className={styles.modalImg}>
                                    <img src={work.projectImg.url} alt="" width="100%" />
                                </div>
                                <div className={styles.modalContent}>
                                    <h6>{work.projectType}</h6>
                                    <h2>{work.projectTitle}</h2>
                                    <p>{work.projectDesc}</p>
                                    <a href={work.projectUrl} target="_blank" rel="noopener noreferrer" className="black_btn">View Project</a>
                                    <a onClick={handleClose} className="close_btn">Close</a>
                                </div>
                            </div>
                        )
                    }
                </DialogContent>
            </Dialog>
        </>
    )
}
