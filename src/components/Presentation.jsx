import "../styles/Presentation.css";

function Presentation(props) {

    return (
        <section className="presentation-bloc">
            <h3 className="presentation-title">{props.title}</h3>

            <div className="presentation-banner">
                <p className="presentation-text">{props.text}</p>
            </div>
        </section>
    );
}

export default Presentation;