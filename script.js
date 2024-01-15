let numeroBotao = document.querySelectorAll('.number')
let operacaoBotao = document.querySelectorAll('.operation')
let display = document.getElementById('visor-display')
let displayMenor = document.getElementById('previous-display')
let igual = document.getElementById('equal')
let operando1 = ""
let operando2 = ""
let operacao = ""
let contaMat
let resultado

const buttonClear = document.getElementById('button-clear')
if (buttonClear){
    buttonClear.addEventListener('click', () => {
        display.innerHTML = ""
        displayMenor.innerHTML = ""
        operando1 = ""
        operando2 = ""
        operacao = ""
    })
}

// document.getElementById('button-clear').addEventListener('click', () => { // limpa a tela ao apertar o "C"
//     display.innerHTML = ""
//     displayMenor.innerHTML = ""
//     operando1 = ""
//     operando2 = ""
//     operacao = ""
// })

let maximo = screen.width < 500 ? 12 : 17 // usado pra definir o tamanho maximo do visor de acordo com o tamanho da tela

numeroBotao.forEach(item => {
    item.addEventListener('click', (e) => {
        if(display.innerHTML.length >= maximo){
            if(operando1 != ""){
                e.preventDefault
            } else {
                atribuirNumero(item.innerHTML)
            }
        } else {
            atribuirNumero(item.innerHTML)
        }
    })
})

operacaoBotao.forEach(item => {
    item.addEventListener('click', (e) => {
        if (operando1 === "" || operacao !== "") {
            e.preventDefault
        } else {
            operacao = item.innerHTML
            display.innerHTML = item.innerHTML + " "
            displayMenor.innerHTML = operando1.replace(/ /g, "")
        }
    })
})

if (igual){
    igual.addEventListener('click', () => {
        if (operando1 === "" && operacao === "" && operando2 === ""){
            display.innerHTML = "0"
            displayMenor.innerHTML = ""
        } else {
            if(operacao === "" && operando2 === ""){
                contaMat = operando1
            } else if (operacao !== "" && operando2 === ""){
                contaMat = operando1 + operacao + operando1
            } else {
                contaMat = operando1 + operacao + operando2
            }
            resultado = Function("return " + contaMat)();
            displayMenor.innerHTML = ""
            display.innerHTML = resultado
            operando1 = "" // necessário para limpar a tela quando digitar de novo
            operacao = ""
            operando2 = ""
        }
        
    })
}
    

document.addEventListener('keypress', (e) => { 
    const valorTecla = e.key // armazena o valor da tecla
    
    if(valorTecla.match("^[0-9]")){ // verifica se é numero
        if(display.innerHTML.length >= maximo){
            if(operando1 != ""){
                e.preventDefault
            } else {
                atribuirNumero(valorTecla)
            }
        } else {
            atribuirNumero(valorTecla)
        }
    
    } else if (valorTecla.match("[-+*/]")) { //verifica se é operação
        
        if (operando1 === "" || operacao !== "") {
            
            e.preventDefault
            
        } else {
            
            operacao = valorTecla
            displayMenor.innerHTML = operando1.replace(/ /g, "")
            display.innerHTML = operacao
            
        }
    } else if (valorTecla === "=" || valorTecla === "Enter") {
        
        if (operando1 === "" && operacao === "" && operando2 === ""){
            
            display.innerHTML = "0"
            
        } else {

            switch(operacao) {
                case "+":
                    if (operando2 === ""){
                        contaMat = returnSoma(operando1,operando1)
                    } else {
                        contaMat = returnSoma(operando1,operando2)
                    }
                    break

                case "-":
                    if (operando2 === ""){
                        contaMat = returnSubtracao(operando1,operando1)
                    } else {
                        contaMat = returnSubtracao(operando1,operando2)
                    }
                    break

                case "*":
                    if (operando2 === ""){
                        contaMat = returnMultiplicacao(operando1,operando1)
                    } else {
                        contaMat = returnMultiplicacao(operando1,operando2)
                    }
                    break

                case "/":
                    if (operando2 === ""){
                        contaMat = returnDivisao(operando1,operando1)
                    } else {
                        contaMat = returnDivisao(operando1,operando2)
                    }
                    break

                default:
                    contaMat = operando1;
            }

            // if(operacao === "" && operando2 === ""){
            //     contaMat = operando1
            // } else if (operacao !== "" && operando2 === ""){
            //     contaMat = operando1 + operacao + operando1
            // } else {
            //     contaMat = operando1 + operacao + operando2
            // }
            // resultado = Function("return " + contaMat)(); // calcula o valor da string sem usar eval
            resultado = contaMat
            display.innerHTML = resultado
            displayMenor.innerHTML = ""
            operando1 = "" // necessário para limpar a tela quando digitar de novo
            operacao = ""
            operando2 = ""
            contaMat = ""
        }
    }
})

function atribuirNumero(numero) {
    if (operando1 === "") { // limpa a tela após apertar o = e digitar de novo (operando1 = "" lá na função resultado)
        display.innerHTML = ""
    }
    if (operacao === "") {
        operando1 += numero.replace(/ /g, "")
        display.innerHTML += numero.replace(/ /g, "")
        
    } else {
        operando2 += numero.replace(/ /g, "")
        display.innerHTML += numero.replace(/ /g, "")
    }
}

function returnSoma (num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}
function returnSubtracao (num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}
function returnMultiplicacao (num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}
function returnDivisao (num1, num2) {
    return parseFloat(num1) / parseFloat(num2);
}

module.exports = {
    returnSoma,
    returnSubtracao,
    returnMultiplicacao,
    returnDivisao
}

// if(operacao === "" && operando2 === ""){
//     contaMat = operando1
// } else if (operacao !== "" && operando2 === ""){
//     contaMat = operando1 + operacao + operando1
// } else {
//     contaMat = operando1 + operacao + operando2
// }