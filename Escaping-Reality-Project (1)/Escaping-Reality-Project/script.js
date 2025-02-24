let rnd = (l, u) => Math.floor(Math.random() * (u - l) + l);
let scene;
let carrots = [];
let flowers = [];
let bushes = [];
let trees = [];
let lavenders = [];
let mushrooms = [];
let chickens = [];
let rabbits = [];


window.onload = function() {
  scene = document.querySelector("a-scene");
  chicken = document.querySelector("#chicken");
  chicken.a = 0;
  chicken.da = -.01;

  for (let i = 0; i < 20; i++) {
    x = rnd(-50, 30);
    z = rnd(-50, 30);
    carrot = new Carrot(x, z);
    scene.append(carrot);
    carrots.push(carrot);
  }

  for (let i = 0; i < 65; i++) {
    x = rnd(-40, 20);
    z = rnd(-50, 20);
    if (distanceToPoint(x, z) > 15) {
      flower = new Flower(x, z);
      scene.append(flower);
      flowers.push(flower);
    } else {
      i--;
      console.log("Collison")
    }
  }

  for (let i = 0; i < 30; i++) {
    x = rnd(-50, 20);
    z = rnd(-50, 20);
    if (distanceToPoint(x, z) > 10) {
      bush = new Bush(x, z);
      scene.append(bush);
      bushes.push(bush);
    } else {
      i--;
      console.log("Collision with house")
    }
  }

  for (let i = 0; i < 100; i++) {
    x = rnd(-40, 40);
    z = rnd(-55, 30);
    if (distanceToPoint(x, z) > 10) {
      tree = new Tree(x, z);
      scene.append(tree);
      trees.push(tree);
    } else {
      i--;
      console.log("Collision with house")
    }
  }

  for (let i = 0; i < 90; i++) {
    x = rnd(-10, 30);
    z = rnd(-10, 20);
    lavender = new Lavender(x, z);
    scene.append(lavender);
    lavenders.push(lavender);
  }

  for (let i = 0; i < 20; i++) {
    x = rnd(-40, 10);
    z = rnd(-40, -10);
    mushroom = new Mushroom(x, z);
    scene.append(mushroom);
    mushrooms.push(mushroom);
  }

  for (let i = 0; i < 10; i++) {
    x = rnd(-10, 30);
    z = rnd(-10, 20);
    chicken = new Chicken(x, z);
    scene.append(chicken);
    chickens.push(chicken);
  }

  for (let i = 0; i < 10; i++) {
    x = rnd(-10, 30);
    z = rnd(-10, 20);
    rabbit = new Rabbit(x, z);
    scene.append(rabbit);
    rabbits.push(rabbit);
  }


  loop();

}

function loop() {
  for (let chicken of chickens) {
    chicken.walk();
  }
  for (let rabbit of rabbits) {
    rabbit.walk();
  }
  
  window.requestAnimationFrame(loop);
}

function distanceToPoint(x, z) {
  //position="16 -1.35 -1"
  let x1 = 6;
  let y1 = -1.35;
  let z1 = -7;
  let x2 = x;
  let y2 = -1;
  let z2 = z;

  let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
  return d;
}

