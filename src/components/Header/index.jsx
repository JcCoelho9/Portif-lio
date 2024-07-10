import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useState } from 'react';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Coelho.dev</span>
            </Link>
            <nav className={`${styles.menuSandwich} ${showMenu ? styles.show : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/sobre" onClick={toggleMenu}>Sobre</Link>
                <Link to="/projetos" onClick={toggleMenu}>Projetos</Link>
                <Link to="/contatos" onClick={toggleMenu}>Contatos</Link>
            </nav>
            <div className={styles.menuButton} onClick={toggleMenu}>
                <span className={styles.linha}></span>                
                
            </div>
        </header>
    );
}

export default Header;
