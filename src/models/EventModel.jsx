 class Event {

    constructor() {
        this.uuid = "";
        this.titre = "";
        this.description = "";
        this.dateDebut = new Date(19700101);
        this.dateFin = null;
        this.localisation = "";
        this.duree = 120;
        this.intervenant = "";
        this.image = {
            src: "",
            alt: "",
            label: ""
        };
    }

}
export default Event;
