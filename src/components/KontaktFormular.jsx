import mystyle from './KontaktFormular.module.css';
import { Link } from 'react-router-dom';

export default function Formular () {
    return (
        <div className={mystyle.kontaktFormular}>
            <label for='navn'>Indtast dit for- og efternavn:</label>
            <br></br>
            <input type='text' id='navn' value='Fornavn og efternavn:'></input> 
            <br></br>
            <br></br>
            <label for='tlf'>Indtast dit telefonnummer:</label>
            <br></br>
            <input type='text' id='tlf' value='Tlf.nr.:'></input>
            <br></br>
            <br></br>
            <label for='e-mail'>Indtast din E-mail</label>
            <br></br>
            <input type='text' id='e-mail' value='E-mail'></input>
            <br></br>
            <br></br>
            <label for='besked'>Skriv din besked</label>
            <textarea id='besked' placeholder='Skriv din besked her' rows='6' cols='40'></textarea>

           
            <p className={mystyle.sendKnap}>
                <Link className={mystyle.sendTekst} to="/">Send</Link>
            </p>
               
        </div>
    );

}