import Galerie from "../pages/Galerie";



class GalerieServices {

    constructor() {
    }


    /** 
     * getAll est une fonction permettant de recuperer depuis un serveur l'ensemble des elements correspondant aux services 
     * 
     * returns Array<Event>
     */
    async getAll() {
        let galeries = []

        const url = "/api/gallery";

        try {
            const response = await fetch(url, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
            if (Array.isArray(result)) {
                galeries = result;
            } else if (Array.isArray(result?.gallery)) {
                galeries = result.gallery;
            } else if (Array.isArray(result?.galleries)) {
                galeries = result.galleries;
            } else {
                galeries = [];
            }
        } catch (error) {
            console.error(error.message);
        }
        return galeries;

    }



    /** 
     * getUUID est une fonction permettant de recuperer depuis un serveur l'element correspondant aux services et a l'UUID correspondant
     * 
     * returns Event
     */
    async getUUID(uuid) {
        let galerie = new Galerie();
        const url = `/api/gallery/${uuid}`;

        try {
            const response = await fetch(url, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
            return galerie;

        } catch (error) {
            console.error(error.message);
        }
    }


}
export default new GalerieServices(); 
