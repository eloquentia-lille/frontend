import '../styles/footer.css'
// Importation social media icon + eloquentia logo white 
import linkedin from '../assets/linkedin-logo-linkedin-icon-transparent-free-png.webp'
import facebook from '../assets/facebook-logo-facebook-icon-transparent-free-png.webp'
import instagram from '../assets/instagram-logo-instagram-icon-transparent-free-png.webp'
import logo from '../assets/Eloquentia-logo-white.svg';
import { NavLink } from "react-router-dom";


function Myfooter() {

  return (
    <>

                                                {/* FOOTER  */}
        <div className="footer">

                    {/* Container avec les elements du footer SAUF mentions legales etc */}
 <div className="footer-content">


                                             {/* COLONNE 1 GAUCHE  */}
            <div className="colonne-1">
                {/* logo eloquentia cliquable vers le site principale  ? */}
                <a href="https://eloquentia.world/"><img src={logo} alt="Logo" /></a>  

                <p>Eloquentia est une association sans but lucratif permettant aux jeunes de s'exprimer librement et 
                    de prendre confiance en eux à travers des formations et des concours de prise de parole. </p>

              <div className="social-icons">
                    <a href="https://www.linkedin.com/in/eloquentia-lille-b1a5183b9/"><img src={linkedin} alt="Logo" /> </a>
                    <a href="https://www.instagram.com/eloquentia.lillemetropole/"><img src={instagram} alt="Logo" /> </a>
                    <a href="https://www.facebook.com/EloquentiaLille/"><img src={facebook} alt="Logo" /> </a>
                </div>
            </div>
            
                                             {/* COLONNE 2 MILIEU  */}

            <div className="colonne-2">
                <h3>Nous</h3>
                <ul>
                    {/* {({isActive}) => isActive ? 'active' : undefined} Si isActive est vrai alors renvoie 
                        "active", sinon faux = undifined donc pas de changement 
                        quand le lien est actif, css sur la classe <a></a>, donc surlignage */}
    <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : undefined}>Accueil</NavLink></li>
    <li><NavLink to="/impact" className={({isActive}) => isActive ? 'active' : undefined}>Notre Impact</NavLink></li>
    <li><NavLink to="/actualite" className={({isActive}) => isActive ? 'active' : undefined}>Actualités</NavLink></li>
    <li><NavLink to="/galerie" className={({isActive}) => isActive ? 'active' : undefined}>Galerie</NavLink></li>
    <li><NavLink to="/calendrier" className={({isActive}) => isActive ? 'active' : undefined}>Calendrier</NavLink></li>
    <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : undefined}>Contact</NavLink></li>
                </ul>
            </div>
                                                       {/* COLONNE 3 DROITE  */}

            <div className="colonne-3">
                <h3>Nous contacter</h3>
                   <ul>
                    <li><a href="#">Par telephone : 07 56 75 66 89 </a></li>
                    <li><a href="#">Par mail : eloquentia-lille@gmail.com</a></li>
                    <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : undefined}>Page contact</NavLink></li>
                </ul>
              
            </div>
        </div>

                        {/* Ligne degradee entre footer content et mentions legales  */}
        <div className="line-element">
            <br></br>
            </div>


                        {/* Partie 2 du footer, mentions legales, Copyright etc.  */}
        <div className="footer-2">
            <p>© Eloquentia, association de loi 1901. Tous droits réservés. Made by Oui </p>


            <div>
                <ul>
                    <li><a href="#">Mentions légales</a> </li>
                    <li><a href="https://eloquentia.world/politique-de-confidentialite/">Politique de confidentialité</a> </li>
                    <li><a href="#">Copyright Oui & Co</a> </li>
                </ul>


            </div>
            
            
        </div>    

        </div>
    </>

  );
}

export default Myfooter
