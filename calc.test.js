const { returnSoma, returnSubtracao, returnMultiplicacao, returnDivisao } = require("./script");

describe ("teste funções calculadora", () => {
    test("deve retornar a soma correta", ()=> {
        const result =  returnSoma(1,4)
        
        expect(result).toBe(5);
        expect(result).not.toBe(4);
    })
    test("deve retornar a subtração correta", ()=> {
        const result =  returnSubtracao(4,1)
        
        expect(result).toBe(3);
        expect(result).not.toBe(4)
    })
    test("deve retornar a multiplicação correta", ()=> {
        const result =  returnMultiplicacao(1,4)
        
        expect(result).toBe(4);
        expect(result).not.toBe(5)
    })
    test("deve retornar a divisao correta", ()=> {
        const result =  returnDivisao(4,1)
        
        expect(result).toBe(4);
        expect(result).not.toBe(3)
    })
    test("divisão por 0 deve retornar infinity", () => {
        const result = returnDivisao(4,0)
        
        expect(result).toBe(Infinity)
        expect(result).not.toBe(4)
    })
})
