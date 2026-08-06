require ("dotenv").config();
const express = require('express');  
const app = express();  
const port =  process.env.PORT || 3000; 

app.get("/", (_, res) => { 
  res.send("Hola , estamos aprendiendo express con la ficha 3407184"); 
});  

app.get("/datos", (_, res) => {
  res.json({
    datos_personales: {
      nombre: "Johan Stiven",
      apellido: "Prato Cuesta",
      listatelefono: [3102218250]
    },
    datos_programa: {
      nombre_programa: "ADSO",
      tipo_programa: "tecnologo",
      ficha: "3407184"
    }
  });
});


app.listen(port, () => { 
  console.log(`Servidor en funcionamiento en el puerto: ${port}`); 
});