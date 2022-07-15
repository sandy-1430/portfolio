import styles from "../styles/portfolio.module.scss";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const [menu, setMenu] = useState(false);
    const headerRef = useRef(null);

    // handle scroll event
    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset > (elTopOffset + elHeight)) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    const openMenu = () => {
        menu ? setMenu(false) : setMenu(true);
    }

    // add/remove scroll event listener
    useEffect(() => {
        var header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
            handleScroll(header.top, header.height)
        }
        window.addEventListener('scroll', handleScrollEvent);
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <header className={`${styles.header} ${sticky.isSticky ? styles.sticky : ''}`} ref={headerRef}>
            <div className="container">
                <div className="d_flex flex_wrap just_btn">
                    <div className={styles.logo}></div>
                    <a className={styles.mobileMenu} onClick={openMenu}>
                        {menu ? <CloseIcon /> : <MenuIcon />}
                    </a>
                    <ul className={menu ? styles.menuOpen : ''}>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About Us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Services">
                                <a>Services</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/about">
                                <a>Portfolio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Services">
                                <a>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
