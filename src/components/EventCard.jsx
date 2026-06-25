import '../styles/EventCard.css'

function MyEventCard({ titre = 'Titre événement', date = 'Date', description = 'Description', auteur }) {

  return (
    <>
      <div className='EventCard'>
        <div className='EventCardConnector' />

        <div className='EventCardContent'>

          <div className='EventCardTitle'>
            <h3>{date}</h3>
            <h3>{titre}</h3>
          </div>

          <div className='EventCardDescription'>
            <p>{description}</p>
            {auteur && <p>Par {auteur}</p>}
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
