//make player ship properties and methods/functions (player hull and attack properties, player option to attack or retreat)
//make alien ship class and calcualte propertie ranges and methods/functions
//Set as array to filter through all ships in the class as/if destroyed
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
class Ussassembly {
    constructor() {
        this.name = 'USS Assembly'
        this.hull = 20
        this.firepower = 5
        this.accuracy = .7
    }
    target(earthAttack) {
        if (Math.random() < this.accuracy) {
            //            console.log('One blow for Earth!');
            alienShips[0].hull -= this.firepower
        } else {
            console.log('You missed.')
        }
    }
}
let ussAssembly = new Ussassembly

class Alienship {
    constructor(hull, firepower, accuracy) {
        //        this.name = name;
        this.hull = randomNum(3, 6);
        this.firepower = randomNum(2, 4);
        this.accuracy = randomNum(6, 8) / 10;
    }
    target(alienAttack) {
        if (Math.random() < this.accuracy) {
            //            console.log('Earth got me!');
            ussAssembly.hull -= this.firepower
        } else {
            //            console.log('Nice try!')
        }
    }
}
let alienShips = []
for (let as = 0; as < 6; as++) {
    let newAlien = new Alienship
    alienShips.push(newAlien)
}
//console.log(alienShips)
// let endGame()
//   console.log('game has ended');

let battle = () => {
    ussAssembly.target(alienShips[0])
    console.log('Alien Ship hull is ' + alienShips[0].hull)
    if (alienShips[0].hull > 0) {
        alienShips[0].target(ussAssembly)
        console.log('Uss Assembly hull is ' + ussAssembly.hull)
        if (ussAssembly.hull <= 0)
            console.log('You were destroyed defending Earth. Game Over.')

    } else {
        alienShips.shift()
        console.log('This Alien ship has been destoryed!')
    }
    if (ussAssembly.hull > 0 && alienShips.length >= 1 && alienShips[0].hull >= 1) {
        //console.log('check')
        let playerAttack = window.confirm('An Alien ship is approaching. Would you like to attack?');
        if (playerAttack === true) {
            battle()
        }
        else {
            console.log('You failed to defend earth! End game.')
        }

    }

}

battle()
//confirmed that game automatically ends when the last ship is killed
//end game function
//reload page in css maybe