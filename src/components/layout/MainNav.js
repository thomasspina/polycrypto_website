import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNav.module.css';

function MainNav() {
    const [visible, setVisible] = useState(false);

    function handleScroll() {
        const currentScrollPos = window.pageYOffset;

        setVisible(currentScrollPos > 60);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [visible, handleScroll]);

    return (
        <header className={classes.header} style={{top: visible ? '0' : '-5rem'}}>

            <div className={classes.logo}>
                <img src={require('../../img/logo/png/simple_color_nb.png')} alt='Polycrypto'/>
                <p>Polycrypto</p>
            </div>
            
            <nav>
                <ul>
                    <li><Link to='/#top'>Accueil</Link></li>
                    <li><Link to='/#about'>À propos</Link></li>
                    <li><Link to='/#footer'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;

