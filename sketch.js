    
let snowflakes = []; // array to hold snowflake objects 

function messageShow()
{
  alert("----->Insert common christmas congratulation here<-----\n"
  +"Psych!\n"
    +"My dearest Serena!, I want to wish you a Merry Christmas\n"
  +"(if it wasn't so obvious till now lol)"
  +"Also to wish you all the things that are mandated by xmas law\n"
  +"like happiness, and you now the whole bunch XD\n"
  +"But in a serious note, also to tell you that you are a wonderful\n"
  +"person, and I hope that your wishes and dreams come true somehow\n"
  +"no matter how hard things may seem right now,\n"
  +"I'm sure that you'll make it through, and I hope I'll be there\n"
  +"to celebrate your success\n"
  +"(You can read this part the 31th or in January :P)\n"
  +"Have a Happy New Year!\n"
  +"Lots of love, and always missing you <3\n"
  +"Cristian\n"
  +"₍•̀ ⚇•́ ₎");
}


function setup() {
  
  canvas = createCanvas(windowWidth+10, windowHeight+10);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  fill(240);
  noStroke();  
}

function draw() {
  
  let c_chill = color(153,0,153);
  let c_xmass = color(169, 50, 38);
  
    background(c_chill);
  
  
  let t = frameCount / 60; // update time
  fill(245, 238, 248);
  rect(0, 100, windowWidth, windowHeight-200);

  // create a random number of snowflakes each frame
  if (windowWidth>windowHeight)
  {
    for (let i = 0; i < random(5); i++) {
      snowflakes.push(new snowflake()); // append snowflake object
    }
  
    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
      flake.update(t); // update snowflake position
      
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
