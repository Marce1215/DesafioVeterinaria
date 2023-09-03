
const fs = require('fs');

// Define la clase Cita
class Cita {
    constructor(nombre, edad, tipo, color, enfermedad) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
        this.color = color;
        this.enfermedad = enfermedad;
    }
}

// Arreglo para almacenar las citas
const arregloCitas = [];

// Función registrar
const registrar = async (nombre, edad, tipo, color, enfermedad) => {
    const cita = new Cita(nombre, edad, tipo, color, enfermedad);
    arregloCitas.push(cita);
    const citaJSON = JSON.stringify(arregloCitas); // Convertir la instancia en JSON
    
    fs.writeFileSync('citas.json', citaJSON )
    console.log(arregloCitas)
}

// Define la función leer
const leer = async () => {
    try {
        const data = fs.readFileSync('citas.json', 'utf8'); // Leer el contenido del archivo
        const citas = JSON.parse(data); // Convertir el contenido JSON en objetos
        
        console.log('Citas registradas:');
        citas.forEach(cita => {
            console.log(`Nombre: ${cita.nombre}`);
            console.log(`Edad: ${cita.edad}`);
            console.log(`Tipo: ${cita.tipo}`);
            console.log(`Color: ${cita.color}`);
            console.log(`Enfermedad: ${cita.enfermedad}`);
            console.log('----------------------');
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports ={registrar, leer}

