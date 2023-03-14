export class Cuenta{
    
    #cliente;
    #saldo;

    constructor(numero, agencia, cliente, saldo){
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;

        if(this.constructor == Cuenta){
            throw new Error('No se deben de instanciar objetos en la clase Cuenta');
        }
    }

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        throw new Error('Debe implementar el metodo retirarDeCuenta en la clase');
    }
    _retirarDeCuenta(valor, comision) {
        valor = valor * (1+comision/100);
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
    prueba (){
        console.log('metodo padre');
    }
}