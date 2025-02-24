class Lavender{

  constructor(x,z){
    this.x = x;
    this.z = z;
    this.dx = rnd(-10, 10) / 100;
    this.dz = rnd(-10, 10) / 100;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("interact", "");
    
    let stem = document.createElement("a-cylinder");
    stem.setAttribute("position", "4 -1 15");
    stem.setAttribute("color", "#8fb092");
    stem.setAttribute("radius", "0.05");
    stem.setAttribute("height", "0.75");
    this.obj.append(stem);

    let petal = document.createElement("a-cone");
    petal.setAttribute("position", "4.05 -0.60 15");
    petal.setAttribute("color", "#e9dcf5");
    petal.setAttribute("height", "0.1");
    petal.setAttribute("radius-bottom", "0.1");
    petal.setAttribute("rotation", "325 -25 0");
    this.obj.append(petal);

    let petal2 = document.createElement("a-cone");
    petal2.setAttribute("position", "3.95 -0.60 15");
    petal2.setAttribute("color", "#ead1ff");
    petal2.setAttribute("height", "0.1");
    petal2.setAttribute("radius-bottom", "0.1");
    petal2.setAttribute("rotation", "-300 22 0");
    this.obj.append(petal2);

    let petal3 = document.createElement("a-cone");
    petal3.setAttribute("position", "4 -0.60 14.95");
    petal3.setAttribute("color", "#e2bfff");
    petal3.setAttribute("height", "0.1");
    petal3.setAttribute("radius-bottom", "0.1");
    petal3.setAttribute("rotation", "-300 22 0");

    let petal4 = document.createElement("a-cone");
    petal4.setAttribute("position", "4.05 -0.90 15");
    petal4.setAttribute( "color", "#e2bfff");
    petal4.setAttribute("height", "0.1");
    petal4.setAttribute("radius-bottom", "0.1");
    petal4.setAttribute("rotation", "325 -25 0");
    this.obj.append(petal4);

    let petal5 = document.createElement("a-cone");
    petal5.setAttribute("position", "3.95 -0.90 15");
    petal5.setAttribute("color", "#e9dcf5");
    petal5.setAttribute("height", "0.1");
    petal5.setAttribute("radius-bottom", "0.1");
    petal5.setAttribute("rotation", "10 22 0");
    this.obj.append(petal5);

    let petal6 = document.createElement("a-cone");
    petal6.setAttribute("position", "4 -0.90 14.95");
    petal6.setAttribute("color", "#ead1ff");
    petal6.setAttribute("height", "0.1");
    petal6.setAttribute("radius-bottom", "0.1");
    petal6.setAttribute("rotation", "-300 22 0");
    this.obj.append(petal6);

    let petal7 = document.createElement("a-cone");
    petal7.setAttribute("position", "4.05 -1.20 15");
    petal7.setAttribute("color", "#e9dcf5");
    petal7.setAttribute("height", "0.1");
    petal7.setAttribute("radius-bottom", "0.1");
    petal7.setAttribute("rotation", "325 -25 0");
    this.obj.append(petal7);

    let petal8 = document.createElement("a-cone");
    petal8.setAttribute("position", "3.95 -1.15 15");
    petal8.setAttribute("color", "#ead1ff");
    petal8.setAttribute("height", "0.1");
    petal8.setAttribute("radius-bottom", "0.1");
    petal8.setAttribute("rotation", "10 22 0");
    this.obj.append(petal8);

    let petal9 = document.createElement("a-cone");
    petal9.setAttribute("position", "4 -1.15 14.95");
    petal9.setAttribute("color", "#e2bfff");
    petal9.setAttribute("height", "0.1");
    petal9.setAttribute("radius-bottom", "0.1");
    petal9.setAttribute("rotation", "-300 22 0");
    this.obj.append(petal9);

    this.obj.setAttribute("position", { x: x, y: 0, z: z });

    scene.append(this.obj);
  }  
  
}