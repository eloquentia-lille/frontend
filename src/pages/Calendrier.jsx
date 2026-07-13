import MyEventCard from "../components/EventCard";
import MyTimeline from "../components/Timeline";
import '../styles/Calendrier.css'
import { useEffect, useState } from "react";
import EventServices from "../services/eventservices.jsx";

function Calendrier() {
    const [events, setEvents] = useState([]);


    useEffect(() => {
        const loadEvents = async () => {
            const data = await EventServices.getAll();
            console.log(data.events)
            setEvents(data.events || []);

        };

        loadEvents();

    }, []);




    const eventList = events.map((event) => {
        return (
            <MyEventCard
                key={event.id}
                titre={event.titre}
                date={event.date}
                description={event.description}
                organisateur={event.organisateur}
            />
        );
    });


    return (
        <div className="CalendrierPage">

            <div className="BannierePageCalendrier">
                <h1>Page Calendrier</h1>
            </div>

            <div className="CalendrierEvent">
                <div className="CalendrierTopEvent">


                    <div className="CalendrierTopCard">
                        {events[0] ? (
                            <MyEventCard
                                titre={events[0].titre}
                                date={events[0].date}
                                description={events[0].description}
                                organisateur={events[0].organisateur}
                            />
                        ) : (
                            <MyEventCard
                                titre="Titre événement"
                                description="Description"
                                date="Date de l'event"
                            />
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
    );
}
export default Calendrier;
