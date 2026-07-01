import "../styles/Actualite.css";
import "../styles/CardActuality.css";

import Card from "../components/Card";
import Presentation from "../components/Presentation";

import { useState } from "react";

import actus from "../assets/test_data.json";


function Actualite() {

    const listActu = actus.actuality.map((actu) => {
        return (
            <Card
            variant="actuality"
            key={actu.id}
            titre={actu.titre}
            date={actu.date}
            description={actu.description}
            img={actu.img}
            imgAlt={actu.imgAlt}
            />
        );
    });


    let listOnPage = [];

    // Nombre d'actualités affichées par page
    const [nbActuOnPage, setNbActuOnPage] = useState(5);
    const [page, setPage] = useState(0);
    
    if (listActu.length - (page * nbActuOnPage) > 0){
        listOnPage = listActu.slice((page * nbActuOnPage), (page+1) * nbActuOnPage);
    }


    const nextPage = () => {
        if (listActu.length - ((page+1) * nbActuOnPage) > 0) {
            setPage(page + 1);
        }
    };

    const prePage = () => {
        if (page > 0 ) {
            setPage(page - 1);
        }
    };

    let pageNb = Math.ceil(listActu.length / nbActuOnPage);

    return (
        <>
        <section className="actuality-page">
            <div className="side-column"></div>

            <section className="main-column">

                <div className="presentation-div">
                    <Presentation 
                    title="Bienvenue sur la page des Actualités !"
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam sit illum nulla deleniti minima beatae, rem illo culpa sunt corporis dolor incidunt delectus voluptatibus! Dolore architecto quas repellendus praesentium impedit."
                    />
                </div>
                
                <div className="select-div">
                    <label>
                        Actualités par page : 
                        <select 
                        name="nbActuOnPage"
                        onChange={(event) => {
                            setPage(0);
                            setNbActuOnPage(parseInt(event.target.value));
                        }}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </label>
                    
                </div>

                <div className="list-actu">
                    {listOnPage}
                </div>

                <div className="page-button">

                    <button 
                    className="btn-prec"
                    onClick={prePage}
                    >
                        Page précédente
                    </button>

                    <div className="page-nb">
                        <p>{page+1} / {pageNb}</p>
                    </div>

                    <button 
                    className="btn-suiv"
                    onClick={nextPage}
                    >
                        Page suivante
                    </button>
                </div>
            </section>

            <div className="side-column"></div>
        </section>
            
        </>
    );
}

export default Actualite;