import MyEventCard from "../components/EventCard";
import MyTimeline from "../components/Timeline";
import '../styles/Calendrier.css'

function Calendrier() {


 // liste d'objet actualité type pour test d'affichage
    const event = [

        {
            id: 1,
            titre: "Atelier sur la confiance en soi",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero velit ratione autem quae placeat nesciunt itaque rerum delectus repellat. Odit doloribus delectus ducimus sed animi incidunt, numquam earum quam a?",
            auteur: "Clémence",
            date: "18 juin 2026",
        },

        {
            id: 2,
            titre: "Masterclass de Eren Jaeger",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem, labore hic voluptatum architecto impedit voluptate reprehenderit obcaecati, quod soluta qui sapiente excepturi error repudiandae deleniti quisquam, aliquam maiores asperiores!",
            auteur: "Thomas",
            date: "12 juin 2026",
        },

        {
            id: 3,
            titre: "Demi finale du concours!",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut perferendis exercitationem totam molestiae cum harum perspiciatis quibusdam blanditiis accusamus odit eaque natus, enim ad quidem temporibus repellendus, culpa tenetur.",
            auteur: "Équipe Eloquentia",
            date: "5 juin 2026",
        },

        {
            id: 4,
            titre: "Comment preparer un entretien",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nihil velit et. Saepe unde doloremque id mollitia maxime eveniet, repudiandae, laborum delectus voluptatibus deserunt aspernatur. Quasi sed quas impedit quibusdam.",
            auteur: "Clémence",
            date: "28 mai 2026",
        },

        {
            id: 5,
            titre: "Rencontre avec les benevoles",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officia magni sed. Perspiciatis maxime, laborum eum dolorum officia nesciunt illum impedit consectetur quibusdam exercitationem facilis provident obcaecati harum alias animi.",
            auteur: "Équipe Eloquentia",
            date: "20 mai 2026",
        }

    ];

    const eventList = event.map((event) => {
        return (
            <MyEventCard
                key={event.id}
                titre={event.titre}
                date={event.date}
                description={event.description}
                auteur={event.auteur}
            />
        );
    });


    return (
        <>

<div className="CalendrierPage">
     
    <div className="BannierePageCalendrier"> 
    <h1>Page Calendrier</h1>
    </div>

    <div className="CalendrierEvent">
            <div className="CalendrierTopEvent">

             
                <div className="CalendrierTopCard">
                    {event[0] ? (
                        <MyEventCard
                            titre={event[0].titre}
                            date={event[0].date}
                            description={event[0].description}
                            auteur={event[0].auteur}
                        />
                    ) : (
                        <MyEventCard />
                    )}
                </div>

                <div className="TimelineBall">
                    <div className="timeline-dot" />
                </div>

            </div>


<div className="CalendrierGrid">
    <div className="CalendrierList">
        {eventList}
    </div>

    <div className="CalendrierTimeline">
        <MyTimeline />
    </div> 
</div>
   
    
 </div>
</div>
  
        </>
    );
}

export default Calendrier;
