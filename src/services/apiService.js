// Importación de la URL base de la configuración.
import { apiUrl } from '../config';

import Property from '../models/property';
import Campaign from '../models/campaign';

/**
 * Clase ApiService que encapsula la lógica de las llamadas a la API del backend.
 * Proporciona métodos para realizar peticiones HTTP y procesar respuestas.
 */
class ApiService {

   /**
   * Constructor de la clase ApiService.
   * Inicializa la URL base para las peticiones HTTP.
   */
    constructor() {
      this.url = apiUrl;
    }
  
    /**
     * Método genérico para realizar peticiones fetch a cualquier endpoint.
     * @param {string} endpoint - El endpoint de la API al que se realiza la petición.
     * @returns {Promise<Object>} - Promesa que resuelve en los datos de la respuesta JSON.
     * @throws {Error} - Error de red o de respuesta no válida.
     */
    async fetchData(endpoint) {
      try {
        const response = await fetch(`${this.url}/${endpoint}`);
        if (!response.ok) {
          throw new Error('Red no responde correctamente');
        }
        return await response.json();
      } catch (error) {
        console.error('Hay un problema con la recogida de los datos:', error);
        throw error; 
      }
    }

    /**
   * Recupera todas las propiedades desde el endpoint específico y las transforma en instancias del modelo Property.
   * @returns {Promise<Property[]>} - Promesa que resuelve en un array de instancias de Property.
   * @throws {Error} - Error durante la petición o el procesamiento de los datos.
   */
    async fetchProperties(){
        try{
          let dataProperties = await this.fetchData("properties");
          
          let properties = [];
          
          dataProperties.map((data)=>{
            let property = new Property();
            property.fill(data);
            properties.push(property);
          });

          return properties;

        }catch (error){
          console.error('Hay un problema con la recogida de las propiedades:', error);
          throw error; 
        }
    }

    /**
     * Recupera todas las campañas desde el endpoint específico y las transforma en instancias del modelo Campaign.
     * @returns {Promise<Campaign[]>} - Promesa que resuelve en un array de instancias de Campaign.
     * @throws {Error} - Error durante la petición o el procesamiento de los datos.
     */
    async fetchCampaigns(){
      try{
        let dataCampaigns = await this.fetchData("campaigns");
        
        let campaigns = [];
        
        dataCampaigns.map((data)=>{
          let campaign = new Campaign();
          campaign.fill(data);
          campaigns.push(campaign);
        });

        return campaigns;

      }catch (error){
        console.error('Hay un problema con la recogida de las campañas:', error);
        throw error; 
      }
    } 
  }

  // Exporta una instancia de ApiService para ser utilizada globalmente.
  export default new ApiService();