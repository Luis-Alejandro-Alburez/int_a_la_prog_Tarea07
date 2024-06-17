//Función Saludar
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

//Objeto Persona
let persona = {
    nombre: 'Juan'
};

//Llamar a la función saludar con el contexto de persona utilizando call()
let saludo = saludar.call(persona, persona.nombre);

//Imprimir el saludo
console.log(saludo);