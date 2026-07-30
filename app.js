import express from 'express';
import {configDotenv} from 'dotenv';
configDotenv();
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3030;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (_, res) => {
    res.send("Hola, estamos aprendiendo Express con la ficha 3407184");
});

app.get("/productos", (req, res)=>{
    res.send(`<h1> Listado de productos</h1>
        <ol>
        <li>Televisor</li>
        <li>Celular</li>
        <li>Impresora</li>
        </ol>
    `)
});

app.get("/productos/:nombre", (req, res)=>{
    const nombre = req.params.nombre
    const producto = {
        id: 1,
        nombre: nombre,
        stock: 34,
        precioUni: 2000,
        categoria: "electrodomestico"
    };
    res.json(producto)
})
app.get("/saludo/:nombre", (req, res)=>{
    const saludo = req.params.nombre;
    if(saludo.length<=3) {
        return res.status(400).send("Error: nombre corto");
    }
    res.send(`hola ${saludo} bienvenid@`)
});
app.get("/saludo", (req, res)=>{
    res.send(`<h1> nombres </h1>
        <ol>
        <li>andrea</li>
        <li>dila</li>
        <li>daniel</li>
        </ol>
    `)
});
app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});
