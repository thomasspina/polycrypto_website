import { useState, useEffect } from 'react';

import profiles from '../data/profiles.json';
import classes from './Home.module.css';
import MemberCard from '../components/ui/MemberCard';

function Home() {
    const [fadeArrow, setFadeArrow] = useState(false);

    function handleScroll() {
        const currentScrollPos = window.pageYOffset;

        setFadeArrow(currentScrollPos > 60);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [fadeArrow, handleScroll]);

    return (
        <div>
            <div className={classes.bigLogo} style={{height: window.innerHeight}} id='top'>
                <img src={require('../img/logo/png/color_nb.png')} alt='Big logo image' />
                <a className={classes.bounceArrow} style={{opacity: fadeArrow ? '0' : '1'}}></a>
            </div>

            <div className={classes.about} id="about">
                <h3 className={classes.sectionTitle}>À Propos</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum dolor ut est commodo, eget interdum lectus tristique. 
                    Sed eget augue lectus. Duis elementum consectetur luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                    per inceptos himenaeos. Aliquam hendrerit enim nisi, non luctus turpis convallis a. Fusce nec finibus elit, non luctus purus. 
                    Nullam sagittis semper justo non tincidunt. Maecenas turpis ante, accumsan non nunc in, mollis maximus velit. 
                    Curabitur porttitor mollis nibh et semper. Nullam eu ipsum ullamcorper, accumsan elit sit amet, porta libero. 
                    Integer auctor metus magna, vel vestibulum metus consequat quis. Pellentesque in nulla maximus, suscipit est a, ultrices quam. 
                    Mauris sodales enim ac dolor fringilla, sed cursus arcu eleifend. Nam sed tellus nec elit tincidunt fringilla sit amet ut turpis.

                    Sed luctus odio urna, sed faucibus nibh posuere vel. Praesent dignissim eros risus, volutpat rhoncus quam dictum vehicula. 
                    Nunc nisl nibh, maximus viverra tellus vel, faucibus eleifend eros. Aliquam in hendrerit massa. Nam eget fermentum est, 
                    sed faucibus elit. Proin mollis ligula magna. Aliquam sit amet nibh nec mauris vestibulum ornare. Vestibulum auctor ultricies eleifend.
                    Cras eu sem lorem.

                    Fusce maximus enim at justo porta, sit amet accumsan nisl convallis. Donec id interdum massa. Cras nec purus ligula. 
                    Vestibulum quis nibh sit amet lorem commodo accumsan. Donec cursus tristique ligula id mattis. 
                    Morbi dictum lacus sit amet ipsum hendrerit cursus. Cras bibendum rhoncus aliquam.

                    Sed volutpat risus orci, vel commodo dolor volutpat sit amet. Sed eu diam ut metus feugiat consequat. Proin nec ligula ex. 
                    Nulla sollicitudin nisi eu rutrum consectetur. Maecenas ornare tempus urna et volutpat. In scelerisque nisl quis arcu semper, 
                    in vulputate augue volutpat. Phasellus a ex mauris. Sed posuere ac eros quis iaculis. In at ipsum felis. Nunc at sagittis erat.

                    Praesent turpis nunc, consequat rhoncus condimentum nec, vehicula at sapien. Maecenas scelerisque feugiat justo, 
                    nec efficitur arcu imperdiet a. Proin arcu dui, lacinia vel felis vel, euismod tempus felis. 
                    Cras id quam nec odio imperdiet pulvinar non eget orci. Maecenas porttitor elit eget augue tempor, sed condimentum sem aliquam. 
                    Proin dictum nunc velit, eu tempor orci maximus vel. Nulla erat turpis, mollis ut vulputate at, dictum eu turpis. 
                    In sagittis gravida nisi, in ullamcorper turpis convallis et. Etiam vel venenatis mauris, ut egestas nisl. Proin laoreet iaculis felis, 
                    non convallis dui condimentum ut.
                </p>
            </div>

            <div className={classes.team} id="members">
                <h3 className={classes.sectionTitle} >L'Équipe</h3>
                <div className={classes.teamPhoto}>
                    <img src={require('../img/groupe/groupe.jpeg')} alt="Photo d'équipe" />
                </div>
                <div className={classes.members}>
                    {profiles.map((profile) => {
                        return (
                            <MemberCard profile={profile} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;