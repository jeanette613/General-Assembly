//Game will have 3 dynamic spaces

/*Second section will be divided cue ball in the forefront
  ball ineeds to be a div with sections impacting the probability player's shots
 if ball cant be made interative then multiple buttons should be set aside for the reagions of the cue ball
   Third there will be a center area that will rotate between the following as the game progresses
    1) a set of ball set ups/puzzles with each numbered ball and each subsequent ball (this assumes that balls are only made in order)
      the pocket that the ball should be made into will be predetermined
    2) a set of videos of each ball being entered into their respective pockets
    3) a series of videos of each shot being missed
    4) a series of each cue scratching
/*

/* *******Game play***********
Game will open with a "begin" prompt which will initicate a randomized lag shit with 50/50 outcome porbability
  -Scene of lagshot will play ()
Pop-up announcing winner (User vs. game)


 
else if statement needed here to initiate first round

Who's turn is it now logic:
if winner of round successfully makes the shot they go on to next

else it is the other players turn

Game ends and winner is whomever makes the last shot (i.e. the 9-ball)
const balls = ['ball1', 'ball2', 'ball3',]
const shots = () => {
    balls.forEach((item) => {
        shotOptions()
    })
}
User experiance
Types of shot set-ups
 1) Object ball lined it straight to corner pocket
 2) Object ball slightly to right of corner pocket (but not frozen to rail)
 3) Object ball slightly to left of side pocket (but not frozen to rail)
 4) Object ball lined it straight to side pocket
 5) Object ball slightly to right of side pocket 
 6) Object ball slightly to left of corner pocket

Types of outcomes
1) Object ball is made into pocket (player continues to next round)
2) Object ball is not made into the pocket (next round is played by other players)
3) Object ball is made but followed by a scratch (i.e. cue ball is made in) and that player loses turn AND next round has higher probability in favor of opponant
  (for purpouses of this version, no visial change in ball position will deviate from above mentioned "set-up" in event of a scratch foul)
(No combo shots or interrupted line of sight shots will be presented)

Probability need to be determined based on user click on cue ball (button or pixel location tbd)
  1) higher on cue ball when shot is "straight" will increase likleyhood of a scratch vs lower on cue
  2)Object balls lined up slightly off center will have higher probability with slight "english" but will be much more likley to miss if "excessive english" used

Computer opponant probability needs to be calculated Maybe use probability calucations same as player BUT make target that triggers probability (button vs pixel) random so calculations are even and only have to be written once

Game will be min. of 9 rounds

(alternative version add-on allow for probability to shift with decreased pool cue tip size)

******** DOM design *******
modual on center that shifts between sequential puzzle and outcome video of shit
*/
//userTurn will prompt 9-ball puzzle to appear on center of DOM and will remain until user clicks on cue ball puzzle will be taggged option A) pocket to left of object ball and object ball to left of cue, B) pocket, object ball and cue ball lined up, or C) pocket to right of object ball and object bal to right of cue
//logic for each ball 1-9 will be the same as above and will loop back to option A, B, or C option

let btnPress = 0
let shotType = ('')

const btn = document.getElementById('Center-Shot');
btn.addEventListener('click', center);
function center() {
  shotType = 'center'
  btnPress = 1
  console.log('Center')
  console.log(btnPress)
}

const centerEng = document.getElementById('English-Shot');
centerEng.addEventListener('click', english);
function english() {
  console.log('English')
}
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random3
let gameBegin = Math.floor((Math.random() * 100) + 1);
//50% chance return userTurn function else return botTurn
console.log(gameBegin)

if (gameBegin <= 50) {
  console.log('userTurn');
} else {
  console.log('botTurn')
}


//let userTurn = () => { 
//Open cue ball to click create css class to hide then 

//Create Cue ball propability overlay for user

//Create generic ball play outcomes run through that function then either add probability to that function only for userTurn OR create one function and gamplay probability and allow userTurn to pick and botTurn to randomly select form those functions

//Game ball array to be popped by both botTurn and userTurn
//const objectBall = ['1ball', '2ball', '3ball', '4ball', '5ball', '6ball', '7ball', '8ball', '9ball']
//look up different kinds of elves for elf class with different properties for left/right and center shots

class BallPosition {
  constructor() {
    let turnBegin = Math.floor((Math.random() * 100) + 1);
    if (turnBegin <= 50) {
      this.scratch = .1
      this.score = .6
      this.miss = .3
    } else {
      this.scratch = .4
      this.score = .4
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

/*let tableSetup = () => {
  objectBalls.forEach(objectBall) => {
    ballPlacement()
 })*/

//let shotTurn = => {}

let gamePlay = () => {
  if (objectBall.length >= 1 && btnPress === 0) {
    console.log('check')
  } else {
    console.log('loser')
  }

}

gamePlay()
