// import logo from '../assets/Eloquentia-logo-white.svg';
import '../styles/footer.css'
import linkedin from '../assets/linkedin-logo-linkedin-icon-transparent-free-png.webp'

function Myfooter() {

  return (
    <>
        <div>
 <div className="container">
            <div className="col-1">
                      {/* <img src={logo} alt="Logo" /> */}
                <img src="https://eloquentia.world/wp-content/uploads/2023/12/Eloquentia-logo-white.svg" alt="" />
                <p>Eloquentia est une association sans but lucratif permettant aux jeunes de s'exprimer librement et de prendre confiance en eux à travers des formations et des concours de prise de parole. </p>
              
              <div className="social-icons">
                    <a href="https://www.linkedin.com/in/eloquentia-lille-b1a5183b9/"><img src={linkedin} alt="Logo" /> </a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>

            </div>
            

            <div className="col-2">
                <h3>Nous</h3>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Notre Impact</a></li>
                    <li><a href="#">Actualités</a></li>
                    <li><a href="#">Galerie</a></li>
                    <li><a href="#">Calendrier</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
          
            <div className="col-4">
                <h3>Nous contacter</h3>
               
              
            </div>
        </div>

        <div className="footer-2">
            <p>© 2026 | Mention legales All Rights Reserved.</p>
        </div>        
        
        </div>
    </>

  );
}

export default Myfooter
