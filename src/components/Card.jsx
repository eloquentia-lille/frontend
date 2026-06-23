import "../styles/CardActuality.css";

function Card(props) {
    let image = null;

    if(props.img) {
        image = (
            <img 
            src={props.img} 
            alt={props.imgAlt}
            />
        );
    }

    return (
        <>
            <section className="card">
                <div className="img-div">
                    {image}
                </div>
                <div className="text-div">
                    <h2 className="card-title">{props.titre}</h2>
                    <p className="card-date">{props.date}</p>
                    <p className="card-description">{props.description}</p>
                </div>
            </section>
        </>
    );
}

export default Card;