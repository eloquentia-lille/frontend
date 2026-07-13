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

        const url = "/test_data.json";

        try {
            const response = await fetch(url, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
            galeries = result;
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
        const url = `/test_data.json/${uuid}`;

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
