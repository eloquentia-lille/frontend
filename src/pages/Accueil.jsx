import { Link } from "react-router";


import Card from "../components/card";
import Presentation from "../components/Presentation";
import MyEventCard from "../components/EventCard";

import "../styles/Accueil.css";
import EventServices from "../services/eventservices.jsx";
import GalerieServices from "../services/galerieservices.jsx";
import ActualiteServices from "../services/actualiteservices.jsx";
import { useEffect, useState } from "react";
import EventModel from "../models/EventModel";
import GalerieModel from "../models/GalerieModel.jsx";
import ActualiteModel from "../models/ActualiteModel.jsx";




function Accueil() {

    const formatDate = (value) => {
        // si null / undefined alors return vide 
        if (!value) return "";
        // si objet de type date alors to string 
        if (value instanceof Date) {
            return value.toLocaleDateString("fr-FR");
        }
        // si value === string alors pas besoin de formatage  
        if (typeof value === "string") {
            return value;
        }

        

    };

    const [gallery, setGallery] = useState(new GalerieModel());
    const [actu, setActu] = useState(new ActualiteModel());
    const [event, setEvent] = useState(new EventModel());



    useEffect(() => {
        const loadEvents = async () => {
            const data = await EventServices.getAll();
            const items = Array.isArray(data) ? data : data?.events || [];
            setEvent(items[0] || []);

        };


        const loadActus = async () => {
            const data = await ActualiteServices.getAll();
            const items = Array.isArray(data) ? data : data?.actuality || [];
            setActu(items[0] || []);

        };


        const loadGalleries = async () => {
            const data = await GalerieServices.getAll();
            const items = Array.isArray(data) ? data : data?.gallery || [];
            setGallery(items[0] || []);

        };

        loadGalleries();
        loadActus();
        loadEvents();


    }, []);


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
                            key={actu.uuid || actu.id}
                            titre={actu.titre}
                            date={formatDate(actu.dateDebut || actu.date)}
                            description={actu.description}
                            img={actu.imageSrc || actu.img}
                            imgAlt={actu.imageAlt || actu.imgAlt}
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
                        date={formatDate(event.dateDebut || event.date)}
                        description={event.description}
                        auteur={event.organisateur || event.auteur}
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
                            key={gallery.uuid || gallery.id}
                            titre={gallery.titre}
                            date={formatDate(gallery.dateDebut || gallery.date)}
                            description={gallery.description}
                            img={gallery.imageSrc || gallery.img}
                            label={gallery.imageLabel || gallery.label}
                            imgAlt={gallery.imageAlt || gallery.imgAlt}
                        />

                    </div>

                </div>


            </div>
        </section>

    );
}

export default Accueil;