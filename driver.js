//Verificar o motorista
let nome
let idade
let carteira = false
let veiculo = false

nome = prompt("Coloque seu nome:")
idade = prompt("Coloque sua idade:")

let opcaoCarteira = prompt("Você tem carteira? s/n")
if(opcaoCarteira == "s"){
    carteira = true
}

let opcaoVeiculo = prompt("Você tem carro? s/n")
if(opcaoVeiculo == "s"){
    veiculo = true
}


if(idade < 18 || !carteira){
    document.body.innerHTML += `<h1>${nome}, Você não pode dirigir.</h1>`
}else if(idade >= 18 && carteira && !veiculo){
    document.body.innerHTML += `<h1>${nome}, Você pode dirigir, mas não tem um carro...</h1>`
}else{
    document.body.innerHTML += `<h1>${nome}, você é o motorista certo!</h1>`
}