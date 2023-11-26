//let PlayerName = document.getElementById('NombreJugador')
//JugadorJoined = prompt('Hola, por favor introduce tu nombre para empezar')
//PlayerName.innerHTML = JugadorJoined + ' '


//Macostas
let Burner = document.getElementById('Burnerid')
let Aqua = document.getElementById('Aquaid')
let Rocky = document.getElementById('Rockyid')
let seleccionarMascotaID = document.getElementById('But-select-pet')
seleccionarMascotaID.addEventListener('click', PetSelection)

//sections
let SecSelectAttack = document.getElementById('Ataque-selection')
let SecPetSelection = document.getElementById('Macosta-selection')
//Spans
let MascotaJugador = document.getElementById('MascotaJugador')
let MscostaPc = document.getElementById('MacostaEnemigo')
let CounterVidasJugador = document.getElementById('VidasJugador')
let CounterVidasPc = document.getElementById('VidasEnemigo')
//ataques
let AtaqueJugador
let AtaquePC

function PetSelection() {
    if(Burner.checked) {
        MascotaJugador.innerHTML = 'Burner'
        alert('Has seleccionado Burner')
        PcSelection()
    }
    else if(Aqua.checked) {
        MascotaJugador.innerHTML = 'Aqua'
        alert('Has seleccionado Aqua')
        PcSelection()
    }
    else if(Rocky.checked) {
        MascotaJugador.innerHTML = 'Rocky'
        alert('Has seleccionado Rocky')
        PcSelection()
    }
    else{
        alert('Has una eleccion de mascosta')
    }
}

function PcRandom(max,min) {

    return Math.floor(Math.random() * (max - min + 1) + min)
}

function PcSelection() {
    let pc = PcRandom(3,1)
    if(pc == 1) {
        MscostaPc.innerHTML = 'Burner'
        alert('El enemigo ha selecionado Burner')
    }
    else if(pc == 2) {
        MscostaPc.innerHTML = 'Aqua'
        alert('El enemigo ha selecionado Aqua')
    }
    else{MscostaPc.innerHTML = 'Rocky'
    alert('El enemigo ha selecionado Rocky')
    }
    SecPetSelection.hidden = true
}

//Ataque Fuego
let AtaqueFuego = document.getElementById('Fire-Attack')
AtaqueFuego.addEventListener('click', FireAttacker)
function FireAttacker() {
    AtaqueJugador = 'Fuego'
    PcAttacker()
}

//Ataque Agua
let AtaqueAgua = document.getElementById('Water-Attack')
AtaqueAgua.addEventListener('click', WaterAttacker)
function WaterAttacker() {
    AtaqueJugador = 'Agua'
    PcAttacker()
}

//Ataque Tierra
let AtaqueTierra = document.getElementById('Stone-Attack')
AtaqueTierra.addEventListener('click', StoneAttacker)
function StoneAttacker() {
    AtaqueJugador = 'Tierra'
    PcAttacker()
}

function PcAttacker() {
    let pc = PcRandom(3,1)
    if(pc == 1){
        AtaquePC = 'Fuego'
        PushMesajeCombate()
    }
    else if(pc == 2){
        AtaquePC = 'Agua'
        PushMesajeCombate()
    }
    else{
        AtaquePC = 'Tierra'
        PushMesajeCombate()
    }
    
}

let VidasJugador = 3
let VidasPc = 3
let resultado
function resultadocombate() { 
   
    if( AtaqueJugador == AtaquePC ) {
    resultado = 'Empate'
   }
   else if( AtaqueJugador == 'Fuego' && AtaquePC == 'Tierra') {
    resultado = 'Ganaste'
    VidasPc--
   }
   else if( AtaqueJugador == 'Agua' && AtaquePC == 'Fuego') {
    resultado = 'Ganaste'
    VidasPc--
   }
   else if( AtaqueJugador == 'Tierra' && AtaquePC == 'Agua') {
    resultado = 'Ganaste'
    VidasPc--
   }
   else{
    resultado = 'Perdiste'
    VidasJugador--
   }

}

function VidasCounter() {
    let MensajeFinal = document.createElement('h2')
    CounterVidasJugador.innerHTML = VidasJugador
    CounterVidasPc.innerHTML = VidasPc
    if(VidasJugador == 0 ) {
        MensajeFinal.innerHTML = "Perdiste"
        document.getElementById('Mensajes').appendChild(MensajeFinal)
        SecSelectAttack.hidden = true 
    }
    else if(VidasPc == 0) {
        MensajeFinal.innerHTML = "Ganaste"
        document.getElementById('Mensajes').appendChild(MensajeFinal)
        SecSelectAttack.hidden = true 
    }
}


//introducir texto ataques HTML
function PushMesajeCombate() {
    resultadocombate()
    let MensajeCombate = document.createElement('p')
    MensajeCombate.innerHTML = 'Has atacado con ' + AtaqueJugador + '. ' + 'El enemigo ha atacado con ' + AtaquePC + ' ' + resultado
    document.getElementById('Mensajes').appendChild(MensajeCombate)
    VidasCounter()
}

//Button reset
let ButReset = document.getElementById('Reset-but')
ButReset.addEventListener('click', FunButReset)
function FunButReset() {
    window.location.reload()
}