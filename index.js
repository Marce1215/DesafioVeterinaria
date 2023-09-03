const {registrar,leer}=require('./operaciones.js')
const operaciones=process.argv[2];
const nombre=process.argv[3];
const edad=process.argv[4];
const tipo=process.argv[5];
const color=process.argv[6];
const enfermedad=process.argv[7];
console.log(operaciones);
if(operaciones==='registrar'){
    console.log('Registrando usuario...',nombre,edad,tipo,color,enfermedad);
    registrar(nombre,edad,tipo,color,enfermedad);
}
if(operaciones==='leer'){
    console.log('Leyendo usuario...');
    leer();
}