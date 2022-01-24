//Game will have 3 dynamis spaces

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

Game will be min of 9 rounds

(alternative version add-on allow for probability to shift with decreased pool cue tip size)

******** DOM design *******
modual on center that shifts between sequential puzzle and outcome video of shit
*/
