function totalCarros(carros, propriedade) {
    const quantidadeCarros = carros.reduce((contador, carro) => {
        if (propriedade === 'transmissao' && carro.transmissao.toLowerCase() === 'automática') {
            contador++;
        }

        if(propriedade === 'combustivel' && carro.combustivel.toLowerCase() === 'elétrico'){
            contador++
        }
        return contador;
    }, 0);
    return quantidadeCarros
}

