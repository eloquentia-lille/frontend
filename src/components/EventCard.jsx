import '../styles/EventCard.css'


function MyEventCard() {

  return (
    <>
     
    <div className='EventCard'>
      <div className='EventCardConnector'>

      </div>

        <div className='EventCardContent'>

            <div className='EventCardTitle'>
                <h3>Vendredi 17 juillet</h3>        
        <h3>Atelier anti canicule</h3>
        </div>
        
<div className='EventCardDescription'>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, esse.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, rerum. Porro eum deserunt placeat saepe!</p>
</div>
<div className='ButtonContent'>
<button className='EventCardButton' type="button"><a href="#" >En savoir plus</a></button>

</div>

        </div>

    </div>
    </> 
  ); } 

  export default MyEventCard
