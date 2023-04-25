let numeroBotao = document.querySelectorAll('.number')
let operacaoBotao = document.querySelectorAll('.operation')
let display = document.getElementById('visor-display')
let igual = document.getElementById('equal')
let operando1 = ""
let operando2 = ""
let operacao = ""
let contaMat
let resultado

document.getElementById('button-clear').addEventListener('click', () => { // limpa a tela ao apertar o "C"
    display.innerHTML = ""
    operando1 = ""
    operando2 = ""
    operacao = ""
})

numeroBotao.forEach(item => {
    item.addEventListener('click', (e) => {
        if(display.innerHTML.length >= 18){ // to tentando limitar apenas o operando1 mas nao consigo
            e.preventDefault
        } else {
            if (operando1 === "") { // limpa a tela após apertar o = e digitar de novo (operando1="" lá na função resultado)
            display.innerHTML = ""
            }
            if (operacao === "") {
                operando1 += item.innerHTML.replace(/ /g, "")
                
            } else {
                operando2 += item.innerHTML.replace(/ /g, "")
            }
            display.innerHTML += item.innerHTML.replace(/ /g, "")
        }
    })
})

operacaoBotao.forEach(item => {
    item.addEventListener('click', (e) => {
        if (operando1 === "" || operacao !== "") {
            e.preventDefault
        } else {
            operacao = item.innerHTML
            display.innerHTML += item.innerHTML.replace(/ /g, "")
        }
    })
})

igual.addEventListener('click', () => {
    if (operando1 === "" && operacao === "" && operando2 === ""){
        display.innerHTML = "0"
    } else {
        if(operacao === "" && operando2 === ""){
            contaMat = operando1
        } else if (operacao !== "" && operando2 === ""){
            contaMat = operando1 + operacao + operando1
        } else {
            contaMat = operando1 + operacao + operando2
        }
        resultado = Function("return " + contaMat)();
        display.innerHTML = resultado
        operando1 = "" // necessário para limpar a tela quando digitar de novo
        operacao = ""
        operando2 = ""
    }
    
})

