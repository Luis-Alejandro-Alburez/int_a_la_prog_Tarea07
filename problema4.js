// Objeto rectangulo 
const rectangulo = { 
    alto: 0, 
    ancho: 0, 
    area: function() { 
        return this.ancho * this.alto; 
    } }; 
    
// Objeto cuadrado 
const cuadrado = { lado: 5 }; 

// Usar call() para invocar area con el contexto de cuadrado 
const areaCuadrado = rectangulo.area.call({ ancho: cuadrado.lado, alto: cuadrado.lado }); 

// Imprimir el área del cuadrado 
console.log(areaCuadrado); // Debe imprimir: 25