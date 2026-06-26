import { useState } from 'react';
import '../styles/Contact.css'
// Importation social media icon 
import linkedin from '../assets/linkedin-logo-linkedin-icon-transparent-free-png.webp'
import facebook from '../assets/facebook-logo-facebook-icon-transparent-free-png.webp'
import instagram from '../assets/instagram-logo-instagram-icon-transparent-free-png.webp'


// Fonction contact = creer l'etat react pour les parametres du form (ne pas oublier d'importer useState)
// pour l'instant vide ('') MAIS sera mis a jour quand l'utilisateur tape dans le champ 
// utiliser setNom pour mettre a jour la valeur plus tard
function Contact() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [motif, setMotif] = useState('');
    const [motifPerso, setMotifPerso] = useState('');
    const [message, setMessage] = useState('');

        // preventDefault empeche l'envoi des donnees / fonctionnement normal d'un form 
    const handleSubmit = (event) => {
        event.preventDefault();

        // choisir le motif
        //  SI motif perso + message dans motifPerso alors Autres - est ajoute dans l'objet 
        // Sinon on prend l'un des motifs proposes 
        // ET si pas de motif on met "contact" (rendre motif obligatoire pour eviter dernier ligne ?)
        const finalMotif = motif === 'Autres' && motifPerso
            ? `${motif} - ${motifPerso}`
            : motif || 'Contact';

        // subject = Objet du mail 
        // body = message du mail 
        // mailto = creation du lien mailto avec les donnees saisies 
        // encodeURIComponent ajoute les donnees du form dans l'URL sans caracteres speciaux etc
        // aussi possible de concatener avec + pour l'url 
        // .trim = enleve les potentiels espaces en trop pour la mise en forme de l'objet 
        const subject = `${finalMotif} - ${nom} ${prenom}`.trim();
        const body = message || '';
        const mailto = `mailto:Eloquentia-lille@outlook.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // ouvre le logiciel mail 
        window.open(mailto);
    };


    const contactInfos = {
        numero: '06 67 76 96 15',
        mail: 'Eloquentia-lille@outlook.fr',
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

                                                                    {/* FORMULAIRE  */}

   {/*  onChange= mise a jour de la valeur a chaque saisi / suppression de l'utilisateur */}
{/* onSubmit={handleSubmit} = appel la const qui empeche l'envoie des donnees / refresh page */}
{/* e.target.value = contenu du champ  */}
{/* {motif === 'Autres' && ( si autres selectionne, ALORS rendu du nouveau champ  */}

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
                                <p>
                                    Numéro de téléphone :
                                    <span className='ContactInfosNumero'> {contactInfos.numero}</span>
                                </p>
                                <br />
                                <p>
                                    E-mail :
                                    <span className='ContactInfosMail'> {contactInfos.mail}</span>
                                </p>
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