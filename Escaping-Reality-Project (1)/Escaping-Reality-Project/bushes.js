class Bush {

  constructor(x,z){

    this.dx = rnd(-10, 10) / 100;
    this.x = x;
    this.z = z;
    this.dz = rnd(-10, 10) / 100;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("interact", "");

    let bush = document.createElement("a-dodecahedron");
    bush.setAttribute("position", "7 -1 15");
    bush.setAttribute("scale", "1.1 1.1 1.2");
    bush.setAttribute("color", "#d7d9d7");
    bush.setAttribute("src", "#bush")

    this.obj.append(bush);
    
    this.obj.setAttribute("position", { x: x, y: 0, z: z });

    scene.append(this.obj);

  }



  
}