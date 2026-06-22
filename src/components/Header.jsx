import "../styles/Header.css";

import { NavLink } from "react-router-dom";
import { useState } from "react";


import logo from "../assets/temporaire_logo.PNG";
import menuLogo from "../assets/temp_menu_logoPNG.PNG";


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
                        <img className="logo" src={logo} alt="Logo de l'association Eloquentia" />
                </NavLink>

                <button 
                onClick={toggle} 
                className="menuButton"
                aria-label="Ouvrir le menu"
                aria-expanded={show}
                aria-controls="main-menu"
                >
                    <img 
                    className="menuLogo" 
                    src={menuLogo} 
                    alt="Logo du menu"
                    aria-hidden="true" />
                </button>

            </div>

            <div 
            className={show ? "menuOn" : "menuOff"}
            >
                <nav 
                aria-label="Navigation principale"
                id="main-menu">
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