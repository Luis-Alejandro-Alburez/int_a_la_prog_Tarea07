// Objeto persona1 
const persona1 = { nombre: 'Carlos' }; 

// Objeto persona2 
const persona2 = { nombre: 'Ana' }; 

// Función presentar 
function presentar() { 
    return `Hola, soy ${this.nombre}.`; 
} 

// Usar apply() para invocar presentar con el contexto de persona2 
const presentacion = presentar.apply(persona2); 

// Imprimir la presentación 
console.log(presentacion); // Debe imprimir: Hola, soy Ana.