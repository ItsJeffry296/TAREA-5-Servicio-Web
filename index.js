import express from "express";

let app = express();
app.use(express.json());

let contactos = [];

app.use(express.json());

app.get("/agenda.php", (req, res) => {
    
    let contacto = {
        nombre: "Jeffrey",
        apellido: "Mercado", 
        telefono: "809-272-3343"
    };
    
    if (contactos.length === 0) {
        contactos.push(contacto);
    }
    
    res.json(contactos);
});

app.post("/agenda.php", (req, res) => {
    const { nombre, apellido, telefono } = req.body;
    
    if (!nombre || !apellido || !telefono) {
        return res.status(400).json({ 
            error: "Todos los campos son requeridos" 
        });
    }
    
    let nuevoContacto = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono
    };
    
    
    contactos.push(nuevoContacto);
    
    res.status(201).json({ 
        success: true, 
        message: "Contacto agregado" 
    });
});

app.listen(3000, () => {
    console.log(" Servicio Web listo!: http://localhost:3000/agenda.php");
});