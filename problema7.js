// Objeto cuentaBancaria 
const cuentaBancaria = { titular: 'Juan Pérez', saldo: 1000 }; 

// Función actualizarSaldo 
function actualizarSaldo(monto) { this.saldo += monto; } 

// Monto a agregar 
const monto = 500; 

// Usar apply() para invocar actualizarSaldo con el contexto de cuentaBancaria y el monto a agregar 
actualizarSaldo.apply(cuentaBancaria, [monto]); 

// Imprimir el objeto cuentaBancaria con el saldo actualizado 
console.log(cuentaBancaria); // Debe imprimir: 
// { 
// titular: 'Juan Pérez', 
// saldo: 1500
// }