// IMPORTAR EL CONTROLADOR
const Sybase = require("sybase");

// CONFIGURAR LA CONEXION CON LA DATABASE
const db = new Sybase("10.36.50.119", 1234, "Nuevasep", "SIOSAD", "sadver21");

const my_query = "SELECT * from usuarios";

// ESTABLECER CONEXION CON LA DATABASE
db.connect((err) => {
  if (err) {
    console.error("Error al conectar con la base de datos!", err);
    return;
  }

  console.log("conexion exitosa!");
  
  db.query(my_query, (err, data) => {
    if (err) {
      console.error("Error al ejecutar la consulta!!", err);
      return;
    }

    console.log("Resultado de la consulta:", data);

    db.disconnect((err) => {
      if (err) {
        console.error("Error al desconectar la base de datos!", err);
        return;
      }

      console.log("Se ha desconectado de la base de datos!!");
    });
  });
});
