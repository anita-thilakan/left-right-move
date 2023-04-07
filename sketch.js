
var s1;
var sprites = [];
function setup() {
  createCanvas(400,400);
  s1 = createSprite(200,200,20,20)
  // sprites.push(s1)
  // console.log(sprites[0].x)
}

function draw() 
{
  background("CYAN");

  if(keyDown("left"))
  {
    s1.x -=2
  }

  if(keyDown("right"))
  {
    s1.x +=2
  }
  drawSprites()
}




