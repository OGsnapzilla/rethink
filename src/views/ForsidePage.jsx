import mystyle from './ForsidePage.module.css'; 
import BulletPoints from '../components/BulletPoints';
import ScrollupComponent from '../components/ScrollUp';
import Animation from '../components/Animation';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Forside () {
    return (
        <div>

            <article className={mystyle.scrollUp}>
                <ScrollupComponent></ScrollupComponent>

            </article>

            <div className={mystyle.animationGrid}>
                <article className={mystyle.gridAni}>
                    <Animation></Animation>
                </article>


                <article className={mystyle.bulletPoints}>
                    <BulletPoints></BulletPoints>
                </article>
            </div>

            <div className={mystyle.informationEt}>
                <p>
                    Se hvilke services vi tilbyder
                </p>

                <p className={mystyle.knapEt}>
                    <Link className={mystyle.knapTekst} to="/services">Gå til services</Link>
                </p>
            </div>

            <div className={mystyle.informationTo}>
                <p>
                    Kontakt os for en uforpligtende samtale med vores erfarne konceptudviklere
                </p>

                <p className={mystyle.knapTo}>
                    <Link className={mystyle.knapTekst} to="/kontakt">Gå til kontakt</Link>
                </p>
            </div>








          
        </div>


    )
}