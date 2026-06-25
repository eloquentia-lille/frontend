import { useState } from 'react';
import '../styles/Contact.css'
// Importation social media icon 
import linkedin from '../assets/linkedin-logo-linkedin-icon-transparent-free-png.webp'
import facebook from '../assets/facebook-logo-facebook-icon-transparent-free-png.webp'
import instagram from '../assets/instagram-logo-instagram-icon-transparent-free-png.webp'


function Contact() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [motif, setMotif] = useState('');
    const [motifPerso, setMotifPerso] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const finalMotif = motif === 'Autres' && motifPerso
            ? `${motif} - ${motifPerso}`
            : motif || 'Contact';

        const subject = `${finalMotif} - ${nom} ${prenom}`.trim();
        const body = message || '';
        const mailto = `mailto:Eloquentia-lille@outlook.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailto);
    };

    return (
        <>
            <div className='PageContact'>

                <div className="BannierePageContact">
                    <h1>Nous Contacter</h1>
                </div>

                <div className="PageContactContent">
                    <div className='Colonne-1'>
                        <div className='ContactForm'>
                            {/* <span>Formulaire</span> */}

                            <form onSubmit={handleSubmit} encType="text/plain">
                                <label htmlFor="nom">Nom</label>
                                <input
                                    id="nom"
                                    type="text"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    placeholder="Mon nom"
                                />

                                <label htmlFor="prenom">Prenom</label>
                                <input
                                    id="prenom"
                                    type="text"
                                    value={prenom}
                                    onChange={(e) => setPrenom(e.target.value)}
                                    placeholder="Mon prenom"
                                />

                                <label htmlFor="motif">Motif</label>
                                <select
                                    id="motif"
                                    value={motif}
                                    onChange={(e) => setMotif(e.target.value)}
                                >
                                    <option value="">-Selectionner un motif-</option>
                                    <option value="Atelier">Question sur un atelier</option>
                                    <option value="Inscription">Question sur une ou des inscriptions</option>
                                    <option value="Autres">Autres</option>
                                </select>

                                {motif === 'Autres' && (
                                    <>
                                        <label htmlFor="motifPerso">Motif personnalisé</label>
                                        <input
                                            id="motifPerso"
                                            type="text"
                                            value={motifPerso}
                                            onChange={(e) => setMotifPerso(e.target.value)}
                                            placeholder="Entrez votre motif"
                                        />
                                    </>
                                )}

                                <label htmlFor="message">Mon message</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Message de contact"
                                />

                                <input type="submit" value="Ouvrir ma boîte mail" />
                            </form>

                        </div>
                    </div>


                    <div className='Colonne-2'>
                        <div className='ContactInfos'>
                            <h3>Nos informations de contact</h3>
                            <div>
                            <p>Numero de telephone : 06 67 76 96 15</p> 
                            <br />
                            <p>E-mail : Eloquentia-lille@outlook.fr</p>
                            </div>
                       
                           
                        </div>
                        <div className='SocialMedia'>
                            <h3>Retrouvez nous sur nos reseaux sociaux!</h3>
                            <div className='Social-media-Icons'>
                                <a href="https://www.linkedin.com/in/eloquentia-lille-b1a5183b9/"><img src={linkedin} alt="Logo" /> </a>
                                <a href="https://www.instagram.com/eloquentia.lillemetropole/"><img src={instagram} alt="Logo" /> </a>
                                <a href="https://www.facebook.com/EloquentiaLille/"><img src={facebook} alt="Logo" /> </a>
                            </div>
                        </div>



                    </div>

                </div>

            </div>


        </>

    );
}

export default Contact;