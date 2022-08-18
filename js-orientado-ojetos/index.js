// npm init 
import {CuentaAhorro} from './CuentaAhorro.js';
import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './CuentaCorriente.js';
import {Cuenta} from './Cuenta.js';
const nombreCliente = "Leonardo";
const dniCliente = "13804050";
const numeroCuenta = "123434343";
const saldoCuenta = 1000;

const cliente1 = new Cliente("jose", "13131313", "77788899");
const cuentaCorriente1 = new CuentaCorriente(cliente1, '434343', 'Buenos Aires');
//cuentaCorriente1.#saldo= 500;
console.log(cliente1);
cuentaCorriente1.depositoEnCuenta(100);
cuentaCorriente1.retirarDeCuenta(1000);
console.log(cuentaCorriente1);
let saldoC = cuentaCorriente1.verSaldo();
console.log(`El saldo actual es ${saldoC}`);
saldoC = cuentaCorriente1.depositoEnCuenta(100);
console.log(`El saldo actual es ${saldoC}`);
saldoC =  cuentaCorriente1.retirarDeCuenta(100); 
console.log(`El saldo actual es ${saldoC}`);
console.log(cuentaCorriente1)

const cuentaCorriente2 =new CuentaCorriente(cliente1,'323232', 'Rosario');
cuentaCorriente1.transferir(100, cuentaCorriente2);
console.log(cuentaCorriente2.verSaldo());
console.log(cuentaCorriente2.cliente);


//R2022086089543
//console.log(CuentaCorriente.cantidadCuentas);
const cuentaAhorro1 = new CuentaAhorro(cliente1, '98989', 'Rosario', 100);

console.log(cuentaAhorro1)

const cuentaSimple = new Cuenta(cliente1, '33333', 'Buenos Aires', 100);
