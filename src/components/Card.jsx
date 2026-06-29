function Card(props) {
    let image = null;

    if(props.img) {
        image = (
            <img 
            src={props.img}
            aria-label={props.label}
            alt={props.imgAlt}
            />
        );
    }
    else{
        image = (<div className={`no-img ${props.variant}`}></div>)
    }

    return (
        <>
            <section className={`card ${props.variant}`}>

                <div className={`img-div ${props.variant}`}>
                    {image}
                </div>

                <div className={`text-div ${props.variant}`}>
                    <h2 className={`card-title ${props.variant}`}>{props.titre}</h2>

                    <p className={`card-date ${props.variant}`}>Publié le {props.date}</p>
                    
                    <p className={`card-description ${props.variant}`}>{props.description}</p>
                </div>

                {props.variant === "gallery" && (
                <div className="btn-div">
                    <button 
                    className="btn-access"
                    onClick={() => window.alert("La galerie est affichée !")}
                    >
                        Voir galerie</button>
                </div>
                )}
                
            </section>
        </>
    );
}

export default Card;