 class Galerie {

    constructor() {
        this.uuid = "";
        this.titre = "";
        this.description = "";
        this.date = new Date(19700101);
        this.image = {
            src: "",
            alt: "",
            label: ""
        };
        this.publication = false;


    }
}
export default Galerie; 