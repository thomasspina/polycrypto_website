import MainNav from './MainNav.js';
import Footer from './Footer.js';

function Layout(props) {
    return (
        <div>
            <MainNav />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;