// sound variables
let osc;
let env;
//let timer = 2;
let link_sword;
//let zelda = loadImage('link_sword.jpg');
// debug variable
let test;
var playSong;
// color variables
let h = 1;
let s = 100;
let song = ['A','D','F','A','D','F','A','C','B','G','F','G','A','D','C','E','D'];
// A D F - A D F - A C B G F G A D - C E D
let keypress = 0;
let actualKeyPress = 0;
let input = [];
let openGate = 0;
let needToPress = 18;
//let pos = -200;
let keypressedNow = false;
//let
//let imageArray = [];

function preload() {
  link_sword = loadImage('link_sword.jpg');
  
}

function setup() {
  createCanvas(400, 400);
  //background(255);
  colorMode(HSB);
  background(255);
  //
  
  test = false;
  playSong = loadSound('Zelda.mp3');
  // DO NOT MODIFY CODE AFTER THIS LINE
  env = new p5.Envelope();
  // creates an envelope (see reference for more info)

  env.setADSR(0.1, 0.7, 0.3, 0.1);
  // sets Attack Decay Sustain Release

  env.setRange(1, 0);
  // sets the envelope range

  osc = new p5.Oscillator('triangle');
  // you CAN modify the above line :)
  // creates a new oscillator
  // try 'sine', 'triangle', 'sawtooth', and 'square'

  osc.start();
  osc.amp(env);
  // DO NOT MODIFY CODE ABOVE THIS LINE
}

function draw() {
  fill(0);
  //noLoop();
  // ===================================================
  // some note numbers to get you started!
  // on signal 176: k1 - k4, midi notes 14-17
  // on sigal 144: P1-P4, notes 36, 38, 42, 46
  // on 224: PB (pitch bend)
  // on 176: Mod, Sus
  // on 144: key pressed
  // C4 and C5 Octaves:
  // notes 48-72
  // C4 Octave only:
  // notes 48-59

  // ===================================================
  // for your reference:
  // song of time from Legend of Zelda: Ocarina of Time
  // A D F - A D F - A C B G F G A D - C E D

  // ==========================================================
  // This is the if statement to execute code depending on what
  // key on the MIDI Controller has been pressed.
  /*
  let x1 = map(mouseX, 0, width, 25, 75);
  texture(gate);
  rect(-350,x1,700,400);
  */
  //background(255);
  //loop();
  
  oneKeyPress();
  /*
  text(input[0], 20, 30)
  for(let i = 0; i < keypress+1; i++) {
    text(input[i], 20+20*i, 30);
    text(input.length+1, 10, 60+20*i);
  }
  */
  //noLoop();
  //oneKeyPress();
  //loop();
  
  /*
  for(let i = 0; i < input.length-2; i++) {
    //if(input.length != 1){
    if(input[i] == input[i+1]) {
      input.splice(0,1);
      //splice(input[i],0,1);
    }
    //}
  }
  */
  
  
  
  if(on == 128) {
    keypressedNow = false;
  }
  
  if(input.length == song.length) {
    //for(let i = 0; i < input.length; i++) {
      //if(input[i] != song[i]) {
      //  input = [];
        //keypress = 0;
     // } else {
        //for(let i = 0; i < 50; i++) {
          let a = createA('https://kelenina.github.io/SecondChallange/', '🍀', '_blank');
          a.position(190, 30);
          text("Good Job!!!", 170, 30);
          playSong.play();
          image(link_sword, 50, 50, 300, 300);
          noLoop();
  }    
          //image(gate, 0, 100+20*i);
        //}
      //}
    
    //}
    
 // }
  
  
  
  
  /*
  textSize(32);
  for(let i = 0; i < 50; i++) {
    text(input[i], 10+20*i, 30);
  }
  */
  
 
  

  //fill('red');
  
  
  /*)
  if (on == 176 && note == 14) {
    // K1 Knob code goes here
  } else if (on == 176 && note == 15) {
    // K2 Knob code goes here
  } else if (on == 176 && note == 16) {
    // K3 Knob code goes here
  } else if (on == 176 && note == 17) {
    // K4 Knob code goes here
  } else if (on == 144 && note == 48) {
    // code for the C4 key goes here (very first white key) on
    // default octave
    s = vel; // this sets the saturation as equal to the velocity
  } else {
    // all the other keys not listed above
    
    // this line maps the note to a color - note the range
    // between notes 48 and 72 being mapped to 0-360. These
    // are the notes on the default octave step on the keyboard.
    h = map(note, 48, 72, 0, 360);
  }
  */

  // =========================================================
  // any code not directly executed by keypresses goes here!
  fill(h, s, 100);
  
  // =========================================================
  // this if statement displays debug info about 
  // what keys we are pressing and what signals we are getting

  if (test) {
    background(0);
    textAlign(CENTER);
    textSize(40);
    text("on = " + on, width / 2, height / 2);
    text("midi note = " + note, width / 2, height / 2 + 40);
    text("velocity = " + vel, width / 2, height / 2 + 80);
  }
  
  // =========================================================
  // this if statement plays the specific note tied to the 
  // key, when recieving the "144" signal in the "on" channel.
  // uncomment the line of code in the else if clause to see
  // what changes!
  if (on == 144) {
    osc.freq(midiToFreq(note)); // we send the note to the oscillator
    env.play(); // we play the sound stored in the envelope
  } else if (on == 128) {
    // env.play();
  }
  /*
  function keyPressed() {
  if (value === "a") {
    value = 255;
  } else {
    value = 0;
  }
}
*/
}
function oneKeyPress() {
  //fill('red');
  if(keypressedNow == false) {
  if (on == 144 && note == 57) { //A
    
    //if(input[keypress] == "A") {
      //keypress++;
      input[keypress] = 'A';
      keypress++;
    //}
  }
  if (on == 144 && note == 69) { //A
    //if(input[input.length] == 'A') {
     //keypress++;
    input[keypress] = 'A';
    keypress++;
    //}
  }
  if (on == 144 && note == 50) { //D
    //if(input[input.length] == 'D') {
    input[keypress] = 'D';
    keypress++;
    //}
  }
  if (on == 144 && note == 62) { //D
    //if(input[input.length] == 'D') {
    input[keypress] = 'D';
    keypress++;
    //}
  }
  if (on == 144 && note == 53) { //F
    //f(input[input.length] != 'F') {
    input[keypress] = 'F';
    keypress++;
    //}
  }
  if (on == 144 && note == 65) { //F
    //if(input[input.length] != 'F') {
    input[keypress] = 'F';
    keypress++;
    //}
  }
  if (on == 144 && note == 60) { //C
    //if(input[input.length] != 'C') {
    input[keypress] = 'C';
    keypress++;
    //}
  }
  if (on == 144 && note == 72) { //C
   // if(input[input.length] != 'C') {
    input[keypress] = 'C';
    keypress++;
   // }
  }
  if (on == 144 && note == 59) { //B
   // if(input[input.length] != 'B') {
    input[keypress] = 'B';
    keypress++;
   // }
  }
  if (on == 144 && note == 71) { //B
    //if(input[input.length] != 'B') {
    input[keypress] = 'B';
    keypress++;
   // }
  }
  if (on == 144 && note == 55) { //G
   // if(input[input.length] != 'G') {
    input[keypress] = 'G';
    keypress++;
   // }
  }
  if (on == 144 && note == 67) { //G
  //  if(input[input.length] != 'G') {
    input[keypress] = 'G';
    keypress++;
   // }
  }
  if (on == 144 && note == 64) { //E
   // if(input[input.length] != 'E') {
    input[keypress] = 'E';
    keypress++;
    //pos = -1000;
  //  }
  }
  if (on == 144 && note == 52) { //E
   //if(input[input.length] != 'E') {
    input[keypress] = 'E';
    keypress++;
    //pos = -1000;
   // }
  }
  keypressedNow = true;
  }
}
