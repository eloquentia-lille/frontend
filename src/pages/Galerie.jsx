import Card from "../components/Card";
import Presentation from "../components/Presentation";

import "../styles/CardGallery.css";
import "../styles/Galerie.css";
import GalerieServices from "../services/galerieservices.jsx";
import { useEffect, useState } from "react";



function Galerie() {
    const [galleries, setGalleries] = useState([]);


    useEffect(() => {
        const loadGalleries = async () => {
            const data = await GalerieServices.getAll();
            console.log(data.gallery)
            setGalleries(data.gallery`` || []);

        };

        loadGalleries();

    }, []);


    const listGallery = galleries.map((gallery) => {
        return (
            <Card
                variant="gallery"
                key={gallery.id}
                titre={gallery.titre}
                date={gallery.date}
                description={gallery.description}
                img={gallery.img}
                label={gallery.label}
                imgAlt={gallery.imgAlt}
            />
        );
    })

    return (
        <section className="gallery-page">
            <div className="side-column"></div>

            <div className="main-column">
                <div className="presentation-div">
                    <Presentation
                        title="Bienvenue dans les Galeries !"
                        text="Lorem ipsum c'est chouette !"
                    />
                </div>


                <div className="list-card">
                    {listGallery}
                </div>
            </div>


            <div className="side-column"></div>
        </section>

    );
}

export default Galerie;