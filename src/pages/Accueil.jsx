import { Link } from "react-router";

import data from "../assets/test_data.json";

import Card from "../components/card";
import Presentation from "../components/Presentation";
import MyEventCard from "../components/EventCard";

import "../styles/Accueil.css";




function Accueil() {

    const actu = data.actuality[0];
    const event = data.events[0];

    return (
        <section className="home-page">
            
            <div className="hook-banner">

                <h1 className="hook-title">
                    Bienvenue sur Eloquentia Lille !
                </h1>
                
                <div className="hook-text-container">

                    <p className="hook-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti commodi expedita cum, dolor molestias dicta necessitatibus.
                    </p>
                    
                </div>

            </div>


            <div className="preview-presentation">

                <Presentation
                title="Qui sommes-nous ?"
                text="Lorem le ipsum et la vie qu'elle est belle quand on peut parler sans se faire juger."
                />

                <div className="impact-btn">

                    <Link
                    to="/impact"
                    className="impact-link">
                        Découvrir notre équipe !
                    </Link>

                </div>
                
            </div>

            <div className="preview-actu">

                <div className="card-actuality">

                    <div className="actu-indent">

                        <Presentation
                        title="On partage régulièrement des news"
                        text="Lorem c'est super chouette cette semaine, ipsum."
                        />

                        <div className="actu-btn">

                            <Link
                            to={"/actualite"}
                            className="actu-link"
                            >
                                Découvrirs nos actualités !
                            </Link>

                        </div>

                    </div>

                    <div className="card-actu-preview">

                        <Card
                        variant="actuality"
                        key={actu.id}
                        titre={actu.titre}
                        date={actu.date}
                        description={actu.description}
                        img={actu.img}
                        imgAlt={actu.imgAlt}
                        />
                        
                    </div>

                </div>
                
            </div>

            <div className="preview-event">

                <div className="event-presentation">

                    <Presentation 
                    title="On organise régulièrement des événements !"
                    text="Lorem les événements chez nous, ipsum."
                    />

                    <div className="event-btn">

                        <Link
                        to={"/calendrier"}
                        className="event-link"
                        >
                            Découvrirs nos prochains événements !
                        </Link>

                    </div>

                </div>

                <div className="event-card-preview">

                    <MyEventCard
                    titre={event.titre}
                    date={event.date}
                    description={event.description}
                    auteur={event.auteur}
                    noAfter="no"
                    />

                </div>
                
            </div>

            <div className="preview-gallery">

                <div className="card-gallery">

                    <div className="card-gallery-presentation">

                        <Presentation 
                        title="On a fait plein de choses !"
                        text="Lorem ipsum c'est très la nostalgie."
                        />

                        <div className="gallery-btn">

                            <Link
                            to={"/galerie"}
                            className="gallery-link"
                            >
                                Découvrirs nos événements passés !
                            </Link>

                        </div>

                    </div>

                    <div className="card-gallery-preview">

                        <Card
                        variant="gallery"
                        key={actu.id}
                        titre={actu.titre}
                        date={actu.date}
                        description={actu.description}
                        img={actu.img}
                        label={actu.label}
                        imgAlt={actu.imgAlt}
                        />

                    </div>

                </div>
                
                
            </div>
        </section>
        
    );
}

export default Accueil;