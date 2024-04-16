const config = {
    development: {
      apiUrl: 'http://localhost/api',
    },
    production: {
      apiUrl: 'https://prod.api.com',
    }
};
  
///En el caso de no tener process.env.NODE_ENV definido, utilizamos el entorno de desarrollo.
const env = process.env.NODE_ENV || 'development';
  
export const apiUrl = config[env].apiUrl;