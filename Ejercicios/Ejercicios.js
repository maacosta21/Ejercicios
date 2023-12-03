function powerfullgril (name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false
    this.displayGirls = function() {
        console.log(`Girl information
        nombre: ${this.name}
        color: ${this.color}
        poder: ${this.superpower}
        ${this.isLeader ? 'leader: Si' : 'leader: No'}`)
    }
    
    this.displayleader = function () {
            this.isLeader = true
            console.log(`${this.name} es la lider`)
    }


}

const blossom =  new powerfullgril('Manzanita', 'rojo', 'Fuego')
const buttercup =  new powerfullgril('Pera', 'verde', 'tierra')

blossom.displayleader()
blossom.displayGirls()
buttercup.displayGirls()