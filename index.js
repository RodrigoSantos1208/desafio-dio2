function calculando(numVitorias, numDerrotas) {
    let subtracao = numVitorias - numDerrotas;
    return subtracao;
}

let resultado = calculando(150, 30);
console.log("O resultado dessa subtração é " + resultado);

numVitorias = 120;
if (numVitorias >= 101) {
    console.log(
        "o Herói tem saldo de " + numVitorias + " está no nível de " + "Imortal"
    );
}