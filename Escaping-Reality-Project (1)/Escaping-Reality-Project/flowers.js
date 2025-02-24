class Flower{

constructor(x,z){

  this.dx = rnd(-10, 10) / 100;
  this.x = x;
  this.z = z;
  this.dz = rnd(-10, 10) / 100;
  this.flag = false;

  this.obj = document.createElement("a-entity");
  this.obj.setAttribute("interact", "");

 let stem = document.createElement("a-cylinder");
  stem.setAttribute("position", "0 -1 5");
  stem.setAttribute("height", "0.4");
  stem.setAttribute("radius", "0.05");
  stem.setAttribute("color", "#29783e");
  this.obj.append(stem);

  let mid = document.createElement("a-sphere");
  mid.setAttribute("position", "0 -0.71 5");
  mid.setAttribute("radius", "0.1");
  mid.setAttribute("color", "#dbb753");
  this.obj.append(mid);

  let petal1 = document.createElement("a-cone");
  petal1.setAttribute("position", "0 -0.635 4.9");
  petal1.setAttribute("radius-bottom", "0.1");
  petal1.setAttribute("height", "0.15");
  petal1.setAttribute("rotation", "-45 0 0");
  petal1.setAttribute("color", "#f2b8d7");
  this.obj.append(petal1);

  let petal2 = document.createElement("a-cone");
  petal2.setAttribute("position", "0 -0.68 5.175");
  petal2.setAttribute("radius-bottom", "0.1");
  petal2.setAttribute("height", "0.15");
  petal2.setAttribute("rotation", "65 0 0");
  petal2.setAttribute("color", "#f2b8d7");
  this.obj.append(petal2);

  let petal3 = document.createElement("a-cone");
  petal3.setAttribute("position", "-0.17 -0.65 5");
  petal3.setAttribute("radius-bottom", "0.1");
  petal3.setAttribute("height", "0.15");
  petal3.setAttribute("rotation", "65 -90 0");
  petal3.setAttribute("color", "#f2b8d7");
  this.obj.append(petal3);

  let petal4 = document.createElement("a-cone");
  petal4.setAttribute("position", "0.17 -0.65 5");
  petal4.setAttribute("radius-bottom", "0.1");
  petal4.setAttribute("height", "0.15");
  petal4.setAttribute("rotation", "-45 -95 0");
  petal4.setAttribute("color", "#f2b8d7");
  this.obj.append(petal4);

  this.obj.setAttribute("position", { x: x, y: 0, z: z });

  scene.append(this.obj);
  
}
  
  


  
}