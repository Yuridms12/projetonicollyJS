let a1 = 12;
let a2 = 3;
let operador = '+';
let soma = a1 + a2;
let subtracao = a1 - a2;
let multiplicacao = a1 * a2;
let divisao;
if (a2 === 0) {
    divisao = 'Não é possível dividir por 0!';
} else {
    divisao = a1 / a2;
}
console.log('A soma é: ' + soma);
console.log('A subtração é: ' + subtracao);
console.log('A multiplicação é: ' + multiplicacao);
console.log('A divisão é: ' + divisao);
let result;
switch (operador) {
    case '+':
        result = a1 + a2;
        break;
    case '-':
        result = a1 - a2;
        break;
    case '*':
        result = a1 * a2;
        break;
    case '/':
        if (a2 == 0) {
            result = 'Não é possível dividir por 0!';
        } else {
            result = a1 / a2;
        }
        break;
}
