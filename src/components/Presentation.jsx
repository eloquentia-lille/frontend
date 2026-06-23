import "../styles/Presentation.css";

function Presentation(props) {

    return (
        <section className="presentation-bloc">
            <h3 className="presentation-title">{props.title}</h3>

            <p className="presentation-text">{props.text}</p>
        </section>
    );
}

export default Presentation;