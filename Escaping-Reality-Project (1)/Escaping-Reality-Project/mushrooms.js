class Mushroom{

  constructor(x,z){
    this.x = x;
    this.z = z;
    this.dx = rnd(-10, 10) / 100;
    this.dz = rnd(-10, 10) / 100;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("interact", "");
    this.obj.setAttribute("position", "0 -2 0");
    
    let stem = document.createElement("a-cylinder");
    stem.setAttribute("position", "2 -1 5");
    stem.setAttribute("height", "0.3");
    stem.setAttribute("radius", "0.2");
    stem.setAttribute("color", "#f0daa3");
    this.obj.append(stem);

    let cap = document.createElement("a-cone");
    cap.setAttribute("position", "2 -0.72 5");
    cap.setAttribute("radius-bottom", "0.28");
    cap.setAttribute("height", "0.2");
    cap.setAttribute("src", "#mroom");
    cap.setAttribute("rotation", "0 180 0");
    cap.setAttribute("repeat", "0.75 0.75 0.75");
    this.obj.append(cap);

    this.obj.setAttribute("position", { x: x, y: 0, z: z });

    scene.append(this.obj);
  }
  
}