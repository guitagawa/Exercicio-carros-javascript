const tbody = document.querySelector('.table-car');

carros.forEach(carro => {
    tbody.innerHTML += `
        <tr>
            <td>${carro.marca}</td>
            <td>${carro.modelo}</td>
            <td>${carro.ano}</td>
            <td>${carro.cor}</td>
            <td>${carro.transmissao}</td>
            <td>${carro.combustivel}</td>
            <td>${FormatarMoedas(carro.preco)}</td>
        </tr>
    `


});

document.querySelector('#automaticos').textContent = totalCarros(carros, 'transmissao')

document.querySelector('#eletricos').textContent = totalCarros(carros, 'combustivel')

document.querySelector('#total').textContent = carros.length