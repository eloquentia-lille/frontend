import Card from "../components/Card";
import Presentation from "../components/Presentation";

import "../styles/CardGallery.css";
import "../styles/Galerie.css";

//images
import cloud from "../assets/img_test/cloud.jpg";
import train from "../assets/img_test/train.jpg";
import landscape from "../assets/img_test/landscape.jpg";

function Galerie() {

    const actus = [
    
            {
                id: 1,
                titre: "Atelier de prise de parole",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero velit ratione autem quae placeat nesciunt itaque rerum delectus repellat. Odit doloribus delectus ducimus sed animi incidunt, numquam earum quam a?",
                auteur: "Clémence",
                date: "18 juin 2026",
                img: train,
                imgAlt: "un train dans la ville"
            },
    
            {
                id: 2,
                titre: "Sortie culturelle à Lille",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem, labore hic voluptatum architecto impedit voluptate reprehenderit obcaecati, quod soluta qui sapiente excepturi error repudiandae deleniti quisquam, aliquam maiores asperiores!",
                auteur: "Thomas",
                date: "12 juin 2026",
                img: null,
                imgAlt: null
            },
    
            {
                id: 3,
                titre: "Nouveau partenariat associatif",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut perferendis exercitationem totam molestiae cum harum perspiciatis quibusdam blanditiis accusamus odit eaque natus, enim ad quidem temporibus repellendus, culpa tenetur.",
                auteur: "Équipe Eloquentia",
                date: "5 juin 2026",
                img: cloud,
                imgAlt: "dé nuaj"
            },
    
            {
                id: 4,
                titre: "Atelier confiance en soi",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nihil velit et. Saepe unde doloremque id mollitia maxime eveniet, repudiandae, laborum delectus voluptatibus deserunt aspernatur. Quasi sed quas impedit quibusdam.",
                auteur: "Clémence",
                date: "28 mai 2026",
                img: landscape,
                imgAlt: "un joli paysage"
            },
    
            {
                id: 5,
                titre: "Retour sur la journée des bénévoles",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officia magni sed. Perspiciatis maxime, laborum eum dolorum officia nesciunt illum impedit consectetur quibusdam exercitationem facilis provident obcaecati harum alias animi.",
                auteur: "Équipe Eloquentia",
                date: "20 mai 2026",
                img: null,
                imgAlt: null
            }
    
        ];


    const listGallery = actus.map((actu) => {
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
                <Presentation
                title="Bienvenue dans les Galeries !"
                text="Lorem ipsum c'est chouette !"
                />

                <div className="list-card">
                    {listGallery}
                </div>
            </div>
            

            <div className="side-column"></div>
        </section>
        
    );
}

export default Galerie;