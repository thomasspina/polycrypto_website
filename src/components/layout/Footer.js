import classes from './Footer.module.css';

function Footer() {
    return (
        <div id='footer' className={classes.footer}>
            <div className={classes.legal}>
                <p>&copy; 2022 Polycrypto</p>
                <p className={classes.credit}><a target="_blank" href="https://icons8.com/icon/86875/mail">Mail</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
            </div>
            <div className={classes.footerLogo}>
                <img src={require('../../img/logo/png/white_b.png')} alt='logo' />
            </div>
            <ul className={classes.contacts}>
                <li>
                    <a href='https://www.instagram.com/poly.crypto/' target='_blank'>
                        <img className={classes.contact} src={require('../../img/icons/insta.png')} alt='instagram' />
                    </a>
                </li>
                <li>
                    <a href=''>
                        <img className={classes.contact} src={require('../../img/icons/mail.png')} alt='mail' />
                    </a>
                </li>
            </ul>
        </div>
    );
}



export default Footer;