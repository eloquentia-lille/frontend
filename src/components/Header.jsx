import { NavLink } from "react-router-dom";
import logo from "../assets/temporaire_logo.PNG";
import menuLogo from "../assets/temp_menu_logoPNG.PNG";
import "../styles/Header.css";

import { useState } from "react";



function Header() {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    const navClass = ({ isActive }) => isActive ? "activeLink" : "navLink";

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

                <button 
                onClick={toggle} 
                aria-label="Ouvrir le menu"
                className="menuButton">
                    <img className="menuLogo" src={menuLogo} alt="menu-logo" />
                </button>
            </div>

            <div 
            className={show ? "menuOn" : "menuOff"}
            >
                    <nav>
                        <NavLink 
                        to="/"
                        className={navClass}>
                            Accueil
                        </NavLink>
                    
                        <NavLink 
                        to="/calendrier"
                        className={navClass}>
                            Calendrier
                        </NavLink>
                    
                        <NavLink 
                        to="/actualite"
                        className={navClass}>
                            Actualité
                        </NavLink>
                    
                        <NavLink 
                        to="/galerie"
                        className={navClass}>
                            Galerie
                        </NavLink>
                    
                        <NavLink 
                        to="/contact"
                        className={navClass}>
                            Contact
                        </NavLink>
                </nav>
            </div>
            

        </header>
    );
}

export default Header;