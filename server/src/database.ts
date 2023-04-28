import mysql from 'mysql2/promise';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
  .then(connection => {
    console.log('Conectado a la base de datos MySQL');
    connection.release();
  })
  .catch(error => {
    console.error('Error al conectarse a la base de datos MySQL', error);
  });

export default pool;