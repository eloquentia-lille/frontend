

let galeries = []

export class Galerie {

    constructor() {
        this.id = 0;
        this.titre = "";
        this.description = "";
        this.date = new Date(19700101);
        this.image = "";
        this.imageAlt = "";
        this.label = "";

    }
}

export class GalerieServices {

    constructor() {
    }


    /** 
     * getAll est une fonction permettant de recuperer depuis un serveur l'ensemble des elements correspondant aux services 
     * 
     * returns Array<Event>
     */
    getAll() {

        return galeries;
    }



    /** 
     * getUUID est une fonction permettant de recuperer depuis un serveur l'element correspondant aux services et a l'UUID correspondant
     * 
     * returns Event
     */
    getUUID(uuid) {
        console.log(uuid);
        return galeries;

    }


}