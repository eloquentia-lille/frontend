import MyEventCard from "../components/EventCard";
import MyTimeline from "../components/Timeline";
import '../styles/Calendrier.css'

function Calendrier() {

    return (
        <>

<div className="CalendrierPage">
     
    <h1>Page Calendrier</h1>

    <div className="CalendrierEvent">
            <div className="CalendrierTopEvent">

             
                <div className="CalendrierTopCard">
                    <MyEventCard />
                </div>

                <div className="TimelineBall">
                    <div className="timeline-dot" />
                </div>

            </div>


<div className="CalendrierGrid">
    <div className="CalendrierList">
        <MyEventCard />
        <MyEventCard />
        <MyEventCard />
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
