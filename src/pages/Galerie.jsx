import Card from "../components/Card";
import Presentation from "../components/Presentation";

import "../styles/CardGallery.css";
import "../styles/Galerie.css";

import actus from "../assets/test_data.json";

function Galerie() {

    const listGallery = actus.actuality.map((actu) => {
        return(
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