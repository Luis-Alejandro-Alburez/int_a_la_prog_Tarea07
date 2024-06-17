//Objeto auto
const auto = {
    marca: 'Toyota',
    mostrarMarca: function() {
        return `La marca del auto es ${this.marca}`;
    }
};

//Objeto moto
const moto = {
    marca: 'Honda'
};

//Llamar al método mostrarMarca del objeto auto con el contexto de 
//moto usando call()
const mensaje = auto.mostrarMarca.call(moto);

//Imprimir el mensaje
console.log(mensaje);