import styles from './Header.module.css';

import IgniteLogo from '@Assets/ignite-logo.svg';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt='Ignite logo' />
            <span className={styles.header__title}>Ignite Feed</span>
        </header>
    );
};
