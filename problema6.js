// Objeto libro 
const libro = { titulo: 'El Quijote', autor: 'Miguel de Cervantes' }; 

// Función agregarCapitulos 
function agregarCapitulos(capitulos) { 
    this.capitulos = capitulos; 
} 

// Array de capítulos 
const capitulos = [
    'Capítulo 1: En un lugar de la Mancha', 
    'Capítulo 2: De los molinos de viento'
]; 

// Usar apply() para invocar agregarCapitulos con el contexto de libro y el array de capítulos 
agregarCapitulos.apply(libro, [capitulos]); 

// Imprimir el objeto libro con los capítulos agregados 
console.log(libro); // Debe imprimir: 
// { 
// 
// 
// titulo: 'El Quijote', autor: 'Miguel de Cervantes', capitulos: ['Capítulo 1: En un lugar de la Mancha', 'Capítulo 2: De los molinos de viento'] 
// }