// Função para mascarar os números do cartão caractere por caractere

function Mask(input, outputSelector) {
    let value = input.value.replace(/\D/g, '');
    let maskedValue = '';

    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            maskedValue += ' ';
        }
        maskedValue += value[i];
    }

    if (maskedValue.length < 19) {
        maskedValue += '**** **** **** ****'.substring(maskedValue.length);
    } else {
        maskedValue = maskedValue.substring(0, 19);
    }

    document.querySelector(outputSelector).innerText = maskedValue;
}


// Adicionando espaçamento a cada 4 caracteres digitados no campo de entrada do número do cartão

document.querySelector('.card-number-i').addEventListener('input', (event) => {
    const { value } = event.target;
    const newValue = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    event.target.value = newValue;
});

document.querySelector('.card-number-i').addEventListener('input', () => {
    Mask(document.querySelector('.card-number-i'), '.card-num-box');
});



// Função para atualizar o nome do titular do cartão

function updateCardHolderName() {
    const input = document.querySelector('.card-hold-i');
    const output = document.querySelector('.card-hol-name');
    const value = input.value.trim();

    if (value === '') {
        output.innerText = 'NAME ON CARD';
    } else {
        output.innerText = value;
    }
}


// Atualizando o nome do titular do cartão em tempo real

document.querySelector('.card-hold-i').addEventListener('input', updateCardHolderName);



// Atualizar o CVV em tempo real e validar entrada para aceitar apenas números

document.querySelector('.cvv-i').addEventListener('input', (event) => {
    let value = event.target.value;

    // Remover todos os caracteres que não sejam números

    value = value.replace(/\D/g, '');

    // Atualizar o valor do campo de entrada com os caracteres filtrados

    event.target.value = value;

    // Atualizando a exibição do CVV em algum elemento visual

    document.querySelector('.cvv-box').innerText = value;
});


// Manipulando a animação do cartão ao focar e desfocar o campo CVV

document.querySelector('.cvv-i').addEventListener('focus', () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
});

document.querySelector('.cvv-i').addEventListener('blur', () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
});


// Função para mascarar o mês e validar entrada para aceitar apenas números

function maskMonth(input) {
    let value = input.value.replace(/\D/g, '');

    if (value.length > 2) {
        value = value.substring(0, 2);
    }

    input.value = value;

    // Atualizar a exibição do mês, mostrar "MM" se estiver vazio

    document.querySelector('.exp-m').innerText = value || 'MM';
}



// Função para mascarar o ano e validar entrada para aceitar apenas números

function maskYear(input) {
    let value = input.value.replace(/\D/g, '');

    if (value.length > 2) {
        value = value.substring(0, 2);
    }

    input.value = value;

    // Atualizar a exibição do ano, mostrar "YY" se estiver vazio

    document.querySelector('.exp-y').innerText = value || 'YY';
}


// Atualizando a exibição do mês de expiração em tempo real

document.querySelector('.card-expm-i').addEventListener('input', (event) => {
    maskMonth(event.target);
});


// Atualizando a exibição do ano de expiração em tempo real

document.querySelector('.card-expy-i').addEventListener('input', (event) => {
    maskYear(event.target);
});
