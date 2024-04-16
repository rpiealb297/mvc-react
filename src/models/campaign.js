/**
 * Clase Campaign que modela la estructura de una campaña.
 * Esta clase es utilizada para representar campañas como objetos dentro de la aplicación,
 * facilitando la manipulación y acceso a sus atributos específicos, como el estado de activación.
 */
class Campaign {
    /**
     * Constructor de la clase Campaign.
     * Inicializa una nueva instancia de la campaña con valores predeterminados vacíos o nulos,
     * y un estado de activación por defecto como falso.
     */    
    constructor(){
        this.id = '';               // Identificador único de la campaña
        this.name = '';             // Nombre de la campaña
        this.isActivated = false;   // Indica si la campaña está activada o no, inicialmente falso
    }

    /**
     * Rellena los atributos de la instancia de la campaña con datos proporcionados en formato JSON.
     * Este método es útil para instanciar campañas directamente desde datos obtenidos de una API.
     * @param {Object} jsonData - Objeto que contiene los datos de la campaña en formato JSON.
     *        Se espera que este objeto tenga las propiedades id, name y isActivated.
     */
    fill(jsonData){
        this.id = jsonData.id;
        this.name = jsonData.name;
        this.isActivated = jsonData.isActivated;
    }
}

// Exporta la clase Campaign para ser utilizada en otras partes de la aplicación.
export default Campaign;