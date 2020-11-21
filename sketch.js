var rec
var rec2


function setup() {
  createCanvas(800,400);
  rec = createSprite(600,200,50,50)
  rec2 = createSprite(700,300,50,50)
}

function draw() {
  background(255,255,255);  
  rec.y=mouseY
  rec.x=mouseX
  rec.shapeColor = "red"
  rec2.shapeColor = "blue"
  change()
  drawSprites();

  
}


function change(){
  if(rec.x - rec2.x < rec.width/2+rec2.width/2&&
    rec2.x-rec.x < rec.width/2+rec2.width/2&&rec.y-rec2.y < rec.height/2+rec2.height/2&&rec2.y-rec.y<rec2.height/2+rec.height/2){
    rec.shapeColor = "green"
    rec2.shapeColor = "black"
  }
}