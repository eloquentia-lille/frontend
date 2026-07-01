import '../styles/EventCard.css'

function MyEventCard(props) {

  return (
    <>
      <div className={`EventCard ${props.noAfter ? "no-after" : ""}`}>
        <div className='EventCardConnector' />

        <div className='EventCardContent'>

          <div className='EventCardTitle'>
            <h3>{props.date}</h3>
            <h3>{props.titre}</h3>
          </div>

          <div className='EventCardDescription'>
            <p>{props.description}</p>
            {props.organisateur && <p>Par {props.organisateur}</p>}
          </div>

          <div className='ButtonContent'>
            <button className='EventCardButton' type="button"><a href="#" >En savoir plus</a></button>
          </div>

        </div>

      </div>
    </>
  );
}

export default MyEventCard
