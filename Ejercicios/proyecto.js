let numeros = [1,2,3,4,5,6,7,8,9]
let sumaTotal = 0

function EncuentaImpares(numerosImpares = []) {
  
    for (let index = 0; index < numeros.length; index++) {
        calcular = numeros[index] % 2
        if(calcular !== 0){
            numerosImpares.push(numeros[index])
        }
        
    }
    while(numerosImpares.length > 0) {
        sumaTotal = sumaTotal + numerosImpares.pop()    
    }
    return sumaTotal
}
EncuentaImpares()
//cambios done