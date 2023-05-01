function setup() {
  createCanvas(400, 400);
  
  angleMode(DEGREES);
  
  flower1 = {
    x: 50,
    y: 50,
    size: 1,
    begin: 20,
    petals: 6,
    fill: "red",
    
  }
  
  flower2 = {
    x: 150,
    y: 75,
    size: 1.5,
    begin: 50,
    petals: 9,
    fill: "pink", 
  }
  
  flower3 = {
    x: 125,
    y: 250,
    size: 2,
    begin: 0,
    petals: 7,
    fill: "palevioletred",
  }
  
  flower4 = {
    x: 300,
    y: 150,
    size: 2.5,
    begin: 70,
    petals: 8,
    fill: "maroon",
  }
}

function draw() {
  background(0);
  
  addFlower(flower1);
  addFlower(flower2);
  addFlower(flower3);
  addFlower(flower4);
}

function addFlower(flower){
  push();
  translate(flower.x, flower.y);
  scale(flower.size);
  rotate(flower.begin);
  fill(flower.fill);
  noStroke();
  let addPetals = 360/flower.petals
  for(let i = 0; i < flower.petals; i++){
    rotate (addPetals)
    ellipse(10, 10, 20, 40)
  }
  pop();
}
