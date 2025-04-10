import mystyle from './KontaktPage.module.css';
import Formular from '../components/KontaktFormular';
import Faq from '../components/Faq';

export default function Kontakt () {
    return (
        <div>
            <br></br>
            <h1 className={mystyle.overskrift}>
                Kontakt
            </h1>
            <br></br>
            <div className={mystyle.kontaktGrid}>

        

                <p className={mystyle.kontaktTekst}>
                Har du spørgsmål eller ønsker du et uforpligtende tilbud, så skriv til os allerede nu. Udfyld formularen, og vi forsøger at besvare din henvendelse indenfor 48 timer.
                </p>

                <br></br>
                

                <div className={mystyle.formularGrid}>
                    <Formular></Formular>
                </div>

            </div>


            <Faq></Faq>


            
        </div>
    );
}