import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1>Calculate sum from string App</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;