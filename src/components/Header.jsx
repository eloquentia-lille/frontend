import { NavLink } from "react-router-dom";
import logo from "../assets/temporaire_logo.PNG";
import menuLogo from "../assets/temp_menu_logoPNG.PNG";
import "../styles/Header.css";

function Header() {
    return(
        <header>
            <div className="logoContainer">
                <NavLink 
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "logoButton activeLink" : "logoButton navLink"
                    }>
                        <img className="logo" src={logo} alt="logo-eloquentia" />
                </NavLink>

                <button className="menuButton">
                    <img className="menuLogo" src={menuLogo} alt="menu-logo" />
                </button>
            </div>
            
            <div className="mobileNav">
                    <nav>
                        <NavLink 
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : "navLink"
                        }>
                            Accueil
                        </NavLink>
                    
                        <NavLink 
                        to="/calendrier"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : "navLink"
                        }>
                            Calendrier
                        </NavLink>
                    
                        <NavLink 
                        to="/actualite"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : "navLink"
                        }>
                            Actualité
                        </NavLink>
                    
                        <NavLink 
                        to="/galerie"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : "navLink"
                        }>
                            Galerie
                        </NavLink>
                    
                        <NavLink 
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : "navLink"
                        }>
                            Contact
                        </NavLink>
                </nav>
            </div>
            

        </header>
    );
}

export default Header;