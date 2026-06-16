import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <img src="frontend\src\assets\temporaire_logo.PNG" alt="logo-eloquentia" />

            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/calendrier">Calendrier</NavLink>
                <NavLink to="/actualite">Actualité</NavLink>
                <NavLink to="/galerie">Galerie</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

        </header>
    );
}

export default Header;