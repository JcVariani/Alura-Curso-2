alert ("Boas Vindas. Aqui você vai precisar descobrir um número secreto.");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
console.log("O número secreto é: ", numeroSecreto);
let escolha;
let tentativas = 1;

//Condição para testar se o número digitado é correto
console.log("Resultado da comparação:", escolha == numeroSecreto);

//laço de repetição
while(escolha != numeroSecreto){
    escolha = prompt(`Escolha um número de 1 a ${numeroMaximo}:`);

    if (escolha == numeroSecreto){
       break;
    }
    else if(escolha > numeroSecreto){
        alert(`O número secreto é menor que ${escolha}`);
    }
    else{
        alert(`O número secreto é maior que ${escolha}`);
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ?  "tentativas" : "tentativa";
alert (`Isso aí, você descobriu!! O número secreto é ${numeroSecreto} você acertou em ${tentativas} ${palavraTentativa}.`);

//if(tentativas == 1){
//    alert (`Isso aí, você descobriu!! O número secreto é ${numeroSecreto} você acertou de primeira!!`);
//}else{
//    alert (`Isso aí, você descobriu!! O número secreto é ${numeroSecreto} você acertou em ${tentativas} tentativas.`);
//}