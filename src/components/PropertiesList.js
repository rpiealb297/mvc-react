import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

export default function PropertiesList() {
    const [properties, setProperties] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 
    const [error, setError] = useState(null); 

    /**
     * useEffect para cargar propiedades al montar el componente.
     * El array vacío como segundo argumento asegura que el efecto se ejecute solo una vez.
     */
    useEffect(() => {

        apiService.fetchProperties().then(data => {
            setProperties(data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Fallo al recoger las propiedades:', error);
            setError(error.message);
            setIsLoading(false);
          });
    
    }, []); 

  
    if (isLoading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
  
    // Renderizado del listado de propiedades si no hay errores ni carga pendiente.
    return (
      <div>
        <h1>Lista de propiedades</h1>
        <ul>
          {properties.map(property => (
            <li key={property.id}>
              <h2>{property.name}</h2>
              <p>Dirección: {property.address}</p>
              <p>Campaña ID: {property.campaign}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  
}
