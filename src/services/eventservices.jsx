import Event from "../models/EventModel";







class EventServices {

    constructor() {
    }



    /** 
     * getAll est une fonction permettant de recuperer depuis un serveur l'ensemble des elements correspondant aux services 
     * 
     * returns Array<Event>
     */
    async getAll() {
        let events = []

        const url = "/api/event";

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
                events = result;
            } else if (Array.isArray(result?.events)) {
                events = result.events;
            } else if (Array.isArray(result?.event)) {
                events = result.event;
            } else {
                events = [];
            }
        } catch (error) {
            console.error(error.message);
        }
        return events;

    }


    /** 
     * getUUID est une fonction permettant de recuperer depuis un serveur l'element correspondant aux services et a l'UUID correspondant
     * 
     * returns Event
     */
    async getUUID(uuid) {

        let event = new Event();
        const url = `/api/event/${uuid}`;

        try {
            const response = await fetch(url, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error.message);
            return event;
        }
    }



}
export default new EventServices(); 
