import { NavLink } from "react-router-dom";
import logo from "../assets/temporaire_logo.PNG";
import "../styles/Header.css";

function Header() {
    return(
        <header>
            <nav>

                <NavLink to="/">
                    <img className="logo" src={logo} alt="logo-eloquentia" />
                </NavLink>

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

        </header>
    );
}

export default Header;