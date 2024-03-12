//Atividade 01

let number = prompt (`Digite um número: `)

while (number > 0 ){
    
    console.log(number)
    number --

}
    
console.log(`Contagem regressiva concluida`)



//Atividade 02

let notas = [];
let continuar = true;

while (continuar) {
    let nota = prompt("Insira a nota da disciplina (ou 'sair' para terminar):");

    if (nota.toLowerCase() === 'sair') {
        continuar = false;
    } else {
        notas.push(parseFloat(nota));
    }
}

let soma = notas.reduce((a, b) => a + b, 0);
let media = soma / notas.length;

alert(`A média das notas é: ${media}`);


//Atividade 03

let soma2 = 0;
let continuar2 = true;

while (continuar2) {
    let numero = prompt("Insira um número (ou '0' para terminar):");

    if (parseInt(numero) === 0) {
        continuar2 = false;
    } else {
        soma2 += parseInt(numero);
    }
}

alert(`A soma dos números inseridos é: ${soma2}`);


//Atividade 04

let continuar3 = true;

while (continuar3) {
    let usuario = prompt("Insira o nome do usuário:");
    let senha = prompt("Insira a senha:");

    if (usuario === senha) {
        alert("Erro: a senha não pode ser igual ao nome do usuário. Por favor, tente novamente.");
    } else {
        continuar3 = false;
        alert("Usuário e senha aceitos!");
    }
}


//Atividade 05



let idades = [];
let soma3 = 0;
let i = 0;

while (i < 5) {
    let idade = prompt("Insira a idade da pessoa " + (i + 1) + ":");
    idades.push(parseInt(idade));
    soma3 += parseInt(idade);
    i++;
}

let media2 = soma / idades.length;
let classificacao;

if (media2 >= 0 && media2 <= 25) {
    classificacao = "jovem";
} else if (media2 >= 26 && media2 <= 60) {
    classificacao = "adulta";
} else {
    classificacao = "idosa";
}

alert(`A média de idade da turma é ${media2}, portanto a turma é ${classificacao}.`);


//Atividade 06


let soma4 = 0;
let j = 1;

while (j <= 50) {
    soma += j;
    j++;
}

alert(`A soma dos números de 1 a 50 é: ${soma4}`);




//Desafio

let saldo = 1000;
let continuar4 = true;

while (continuar4) {
    let opcao = prompt("Escolha uma opção:\n1. Ver Saldo\n2. Fazer Saque\n3. Fazer Depósito\n4. Sair");

    switch (opcao) {
        case '1':
            alert(`Seu saldo atual é: $${saldo}`);
            break;
        case '2':
            let saque = prompt("Insira o valor do saque:");
            if (isNaN(saque) || saque <= 0 || saque > saldo) {
                alert("Valor de saque inválido. Tente novamente.");
            } else {
                saldo -= parseFloat(saque);
                alert(`Saque bem-sucedido! Seu saldo atual é: $${saldo}`);
            }
            break;
        case '3':
            let deposito = prompt("Insira o valor do depósito:");
            if (isNaN(deposito) || deposito <= 0) {
                alert("Valor de depósito inválido. Tente novamente.");
            } else {
                saldo += parseFloat(deposito);
                alert(`Depósito bem-sucedido! Seu saldo atual é: $${saldo}`);
            }
            break;
        case '4':
            continuar4 = false;
            alert("Obrigado por usar nosso caixa eletrônico. Até mais!");
            break;
        default:
            alert("Opção inválida. Por favor, escolha uma opção de 1 a 4.");
    }
}
