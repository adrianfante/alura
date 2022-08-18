export class Cuenta {
	#cliente;
	#saldo;
	set cliente(valor) {
		if (valor instanceof Cliente) {
			this.#cliente = valor;
		}
	};
	get cliente() {
		return this.#cliente;
	};
	constructor(cliente, numero, agencia, saldo) {
		if (this.constructor == Cuenta) {
			throw new Error('No se debe instanciar objetos de la clase Cuenta')
		}
		this.numero = numero;
		this.agencia = agencia;
		this.#cliente = cliente;
		this.#saldo = saldo;
	};
	
	depositoEnCuenta(valor) {
		this.#saldo += valor;
		return this.#saldo;
	};
	retirarDeCuenta(valor, comision) {
		valor = valor * (1+comision/100);
		if (valor <= this.#saldo)
			this.#saldo -= valor;
		return this.#saldo;
	};
	verSaldo() {
		return this.#saldo;
	}
	transferir (valor, cuentaDestino) {
		this.retirarDeCuenta(valor);
		cuentaDestino.depositoEnCuenta(valor);
	}

}


