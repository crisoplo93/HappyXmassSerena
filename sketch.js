let snowflakes = []; // array to hold snowflake objects
var mode = "Chill";
var song;
var songdir  = ["songs/you-wont-let-go.mp3", "songs/mariposa.mp3"];


function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}

function musicXmass()
{
 mode = "Xmass";
}

function musicChill()
{
  if(typeof song !== "undefined")
  {
    if (song.isPlaying()) {
      // .isPlaying() returns a boolean
      song.stop();
    } else {
      song.play();
    }
  }
  mode = "Chill";  
  musicChillPlay();
}

function musicChillPlay()
{
 var i = int(random(2))

 song = loadSound(songdir[i], loaded);
 
}

function loaded()
{
 song.play();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  fill(240);
  noStroke();
}

function draw() {
  let c_chill = color(153,0,153);
  let c_xmass = color(169, 50, 38);
  if (mode == "Xmass")
  {
    background(c_xmass);
  }
  else
  {
    background(c_chill);
  }
  
  let t = frameCount / 60; // update time
  fill(245, 238, 248);
  rect(0, 100, windowWidth, windowHeight-200);

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    if (mode == "Xmass")
    {
      flake.display(c_xmass); // draw snowflake
    }
    else
    {
      flake.display(c_chill); // draw snowflake
    }
    
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += this.size/2;

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function(colorS) {
    if (this.posY>100 && this.posY< windowHeight-100) fill(colorS);
    else fill (255);
    ellipse(this.posX, this.posY, this.size);
  };
}
