let listaNumeros = [1, 2, 3, 4, 2, 6, 0,]
let prersultado = 0
let arraytemporal = [[]]
let arrayFinal = []

function encontrarNumeros() {
for (let index = 0; index < listaNumeros.length; index++) {
    let calcular = listaNumeros[index]
    prersultado = prersultado + calcular
    if (prersultado <= 6) {
        arraytemporal[0].push(calcular)
        crearArrays()
        console.log(arraytemporal)
        console.log(listaNumeros[index])
        
    }
    }
    
}
encontrarNumeros()

function crearArrays() {
    if( prersultado == 6 ) {
        prersultado = 0
        arrayFinal = arrayFinal.concat(arraytemporal)
        arraytemporal = [[]]
    }
}