/**
 * Clase Property que modela la estructura de una propiedad.
 * Esta clase es utilizada para representar las propiedades como objetos dentro de la aplicación,
 * facilitando la manipulación y acceso a sus atributos específicos.
 */
class Property {
    /**
     * Constructor de la clase Property.
     * Inicializa una nueva instancia de la propiedad con valores predeterminados vacíos o nulos.
     */
    constructor(){
        this.id = '';       // Identificador único de la propiedad
        this.name = '';     // Nombre de la propiedad
        this.address = "";  // Dirección de la propiedad
        this.campaign = ""; // ID de la campaña asociada a la propiedad
    }

    /**
     * Rellena los atributos de la instancia de la propiedad con datos proporcionados en formato JSON.
     * Este método es útil para instanciar propiedades directamente desde datos obtenidos de una API.
     * @param {Object} jsonData - Objeto que contiene los datos de la propiedad en formato JSON.
     *        Se espera que este objeto tenga las propiedades id, name, address y campaign_id.
     */
    fill(jsonData){
        this.id = jsonData.id;
        this.name = jsonData.name;
        this.address = jsonData.address;
        this.campaign = jsonData.campaign_id;
    }
}

// Exporta la clase Property para ser utilizada en otras partes de la aplicación.
export default Property;