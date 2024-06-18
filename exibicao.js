import prompt from "prompt-sync";
let ler = prompt()

export function deposito() {
    let guardar= 0
    
    while (guardar <= 0) {
        console.log("Digite o valor que deseja Depositar: ")
        guardar = Number(ler())
    }

    return guardar
}

export function saque() {
    let retirada = 0

    while (retirada <= 0) {
        console.log("Digite o valor que deseja Sacar: ")
        retirada = Number(ler())
    }

    return retirada
}

export function confirmar() {
    console.log('Digite "Ok" para confirmar ou "C" para cancelar');
    let conf = ler()

    return conf
}

export function Repetir(mensagem) {
    console.log(`${mensagem} novamente?`);
    let resp = ler()

    console.clear()

    return resp
}

