import mystyle from './Footer.module.css';
import Logo from '../assets/logo-lys.svg';

function Footer() {
    return (
    <div className={mystyle.end}>
        
        <img className={mystyle.logo} src={Logo} alt="Logo" />

        <address>
            <h5>Aarhus</h5>
            <a>Sønderhøj 30<br />
            8260 Viby J  </a> 
        </address>


        <div className={mystyle.aboutend}>
            <h5>Om oss</h5>
            <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Sådan gør vi</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Kontakt</a></li>
            </ul>
        </div>
    </div> 
    )
};

export default Footer;