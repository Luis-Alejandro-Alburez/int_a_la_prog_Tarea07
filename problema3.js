// Objeto persona1 
const persona1 = { nombre: 'Juan' }; 

// Objeto persona2 
const persona2= { nombre: 'María' }; 

// Función saludar 
function saludar() { return `Hola, mi nombre es ${this.nombre}.`; } 

// Usar call() para invocar saludar con el contexto de persona2 
const saludo = saludar.call(persona2); 

// Imprimir el saludo 
console.log(saludo); // Debe imprimir: Hola, mi nombre es María.