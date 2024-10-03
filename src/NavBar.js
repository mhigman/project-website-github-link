import React from 'react';
import styles from './NavBar.module.css';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation().pathname;
    return (
    
        <header className={styles.header}>
            
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <div className={location === '/' ? styles.selectedNavImage : styles.navImage}>
                            <a href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill={location === '/' ? "#192A2B" : "#454F4E" } height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                            </a>
                        </div>
                        <a className={location === '/' ? styles.selectedNavLink : styles.navLink} href="/">About Me</a>
                    </li>
                    <li>
                        <div className={location.startsWith('/repo') ? styles.selectedNavImage : styles.navImage}>
                            <a href='repo'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill={location.startsWith('/repo') ? "#192A2B" : "#454F4E" } height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
                            </a>
                        </div>
                        <a href="https://github.com/mhigman/Personal-Project-Hub" className={location.startsWith('/repo') ? styles.selectedNavLink : styles.navLink}>Project Files</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
            
