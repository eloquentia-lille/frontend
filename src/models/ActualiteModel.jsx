
class Actualite {

    constructor() {
        this.uuid = "";
        this.titre = "";
        this.description = "";
        this.dateDebut = new Date(19700101);
        this.dateFin = null;
        this.image = {
            src: "",
            alt: "",
            label: ""
        };
        this.publication = false;

    }
}
export default Actualite; 