import Actualite from "../pages/Actualite";



class ActualiteServices {

    constructor() {
    }


    /** 
     * getAll est une fonction permettant de recuperer depuis un serveur l'ensemble des elements correspondant aux services 
     * 
     * returns Array<Event>
     */
    async getAll() {
        let actualites = []

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
            console.log("blablalb actu");

            actualites = result;

        } catch (error) {
            console.error(error.message);
        }
        return actualites;

    }


    /** 
     * getUUID est une fonction permettant de recuperer depuis un serveur l'element correspondant aux services et a l'UUID correspondant
     * 
     * returns Event
     */
    async getUUID(uuid) {
        let actualite = new Actualite();
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
            actualite = result;

        } catch (error) {
            console.error(error.message);
        }
        return actualite;

    }


}
export default new ActualiteServices(); 
