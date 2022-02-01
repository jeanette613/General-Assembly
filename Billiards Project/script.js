
let btnPress = 0
let shotType = ('')


class BallPosition {
  constructor() {
    let turnBegin = Math.floor((Math.random() * 100) + 1);
    if (turnBegin <= 50) {
      //this.scratch = .1
      this.score = .7
      this.miss = .3
    } else {
      //this.scratch = .4
      this.score = .8
      this.miss = .2
    }
  }
}

let objectBall = []
for (let ball = 0; ball < 9; ball++) {
  let newBall = new BallPosition
  objectBall.push(newBall)
}
console.log(objectBall)


let gamePlay = () => {
  shotProb()
  if (objectBall.length >= 1) {
    objectBall.shift()
    ifWin()
    console.log('Shot Sucessful')
  } else if (objectBall.length < 1) {
    alert('That was the winning 9-ball Shot!')
  }
  else if (objectBall.length < 1) {
    console.log('Game Over')
  }

}

const btn = document.getElementById('Center-Shot');
btn.addEventListener('click', center);
function center() {
  shotType = 'center'
  btnPress = 1
  console.log('Center')
  console.log(btnPress)
  gamePlay()
}
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random3
let gameBegin = Math.floor((Math.random() * 100) + 1);
console.log(gameBegin)
if (gameBegin <= 50) {
  alert('You won the lag! You get the first shot.')
  console.log('userTurn');
} else {
  console.log('botTurn')
  alert('You lost the lag. The other player goes first!')
  gamePlay()
}

function ifWin() {
  if (objectBall.length < 1) {
    alert('That was the winning 9-ball Shot!')
    window.location.reload()
    //https://www.javatpoint.com/javascript-reload-method#:~:text=In%20JavaScript%2C%20the%20reload(),does%20not%20return%20any%20value.
  }
}

function shotProb() {
  if (Math.random() < objectBall[0].score) {
    alert('Shot Made')
  } else {
    alert('Ball Missed')
  }
}



