function setup() {
  noLoop();
  createCanvas(465, 575);
  angleMode(DEGREES);
  tilesPerRow = 2;
  tilesPerColumn = 2;
  tileWidth = width / tilesPerRow;
  tileHeight = height / tilesPerColumn;

  flower1 = {
    x: 50,
    y: 50,
    size: 1,
    begin: 20,
    petals: 6,
    fill: "red",
  };

  flower2 = {
    x: 150,
    y: 75,
    size: 1.5,
    begin: 50,
    petals: 9,
    fill: "pink",
  };

  flower3 = {
    x: 125,
    y: 200,
    size: 2,
    begin: 10,
    petals: 7,
    fill: "palevioletred",
  };
}

function draw() {
  background(0);
  for (let rowsDrawn = 0; rowsDrawn < tilesPerColumn; rowsDrawn++) {
    for (let columnsDrawn = 0; columnsDrawn < tilesPerRow; columnsDrawn++) {
      let offsetRight = columnsDrawn * tileWidth;
      let offsetDown = rowsDrawn * tileHeight;

      flower1.x = flower1.x + offsetRight;
      flower2.x = flower2.x + offsetRight;
      flower3.x = flower3.x + offsetRight;

      flower1.y = flower1.y + offsetDown;
      flower2.y = flower2.y + offsetDown;
      flower3.y = flower3.y + offsetDown;

      addFlower(flower1);
      addFlower(flower2);
      addFlower(flower3);
    }
  }
}

function addFlower(flower) {
  push();
  translate(flower.x, flower.y);
  scale(flower.size);
  rotate(flower.begin);
  fill(flower.fill);
  noStroke();
  let addPetals = 360 / flower.petals;
  for (let i = 0; i < flower.petals; i++) {
    rotate(addPetals);
    ellipse(10, 10, 20, 40);
  }
  pop();
}
