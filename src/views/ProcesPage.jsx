import mystyle from './ProcesPage.module.css';
import tidslinje from '../assets/tidslinje.svg';
import { Link} from 'react-router-dom';

export default function Proces () {
    return (
        <div>
            <br></br>
            <h1 className={mystyle.overskrift}>
                Sådan gør vi
            </h1>

            <figure className={mystyle.tidslinje}>
                <img src={tidslinje} alt='dette er en tidslinje'/>
            </figure>


            <br></br>

            <div className={mystyle.stepsGrid}>

                <p className={mystyle.stepEt}>
                STEP 1: Indledning
                Vi tager os altid god tid til at forstå dine behov, ønsker og forretning. Derfor indleder vi med en grundig behovsafdækning, der også danner grundlag for godt samarbejde.                
                </p>

                <p className={mystyle.stepTo}>
                STEP 2: Prototyping 
                Vi opbygger altid prototyper ud fra dine behov og ønsker. Du bliver præsenteret for dit websites forside og enkelte undersider.
                </p>

                <p className={mystyle.stepTre}>
                STEP 3: Tilretning 
                Efter præsentation af prototyperne, tilretter vi designet ud fra din feedback. Rettelserne foregår i tæt dialog med dig.   
                </p>

                <p className={mystyle.stepFire}>
                STEP 4: Godkendelse
                Dit endelige design er færdigt, og du bliver præsenteret for det endelige website. Når du er tilfreds, lanceres dit website.
                </p>

                <p className={mystyle.stepFem}>
                STEP 5: Lancering
                Din hjemmeside er godkendt og klar til lancering.
                </p>
            </div>
            
            <div className={mystyle.tilbudKnap}>
                <Link className={mystyle.knapTekst} to="/kontakt">Få et tilbud</Link>

            </div>

        </div>
        
    );
}