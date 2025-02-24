class Tree{

  constructor(x, z){
    this.dx = rnd(-10, 10) / 100;
    this.x = x;
    this.z = z;
    this.dz = rnd(-10, 10) / 100;


    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("interact", "");
    this.obj.setAttribute("scale", "1.4 2 1.5");
    
    //Trunk//
    let cone = document.createElement("a-cone");
    cone.setAttribute("position", "8 -1 6");
    cone.setAttribute("height", "3");
    cone.setAttribute("radius-bottom", "1");
    cone.setAttribute("radius-top", "0.5");
    cone.setAttribute("color", "#210201");
    this.obj.append(cone);
    
    let cone2 = document.createElement("a-cone");
    cone2.setAttribute("position", "8 1 6");
    cone2.setAttribute("height", "5");
    cone2.setAttribute("radius-bottom", "0.6");
    cone2.setAttribute("radius-top", "0.25");
    cone2.setAttribute("color", "#210201");
    this.obj.append(cone2);
    
    let cone3 = document.createElement("a-cone");
    cone3.setAttribute("position", "8.5 1.5 6.25");
    cone3.setAttribute("height", "2.75");
    cone3.setAttribute("radius-bottom", "0.3");
    cone3.setAttribute("radius-top", "0.1");
    cone3.setAttribute("color", "#210201");
    cone3.setAttribute("rotation", "35 55 0");
    this.obj.append(cone3);

    let cone4 = document.createElement("a-cone");
    cone4.setAttribute("position", "7.5 1.5 5.8");
    cone4.setAttribute("height", "3.5");
    cone4.setAttribute("radius-bottom", "0.3");
    cone4.setAttribute("radius-top", "0.1");
    cone4.setAttribute("color", "#210201");
    cone4.setAttribute("rotation", "35 335 0");
    this.obj.append(cone4);

    let cone5 = document.createElement("a-cone");
    cone5.setAttribute("position", "7.5 1.5 5.8");
    cone5.setAttribute("height", "2.75");
    cone5.setAttribute("radius-bottom", "0.3");
    cone5.setAttribute("radius-top", "0.1");
    cone5.setAttribute("color", "#210201");
    cone5.setAttribute("rotation", "20 250 0");
    this.obj.append(cone5);

    //Leaves//
    let leaf = document.createElement("a-dodecahedron");
    leaf.setAttribute("color", "#ffd1da");
    leaf.setAttribute("position", "8.2 3.8 8.6");
    leaf.setAttribute("radius", "1.5");
    this.obj.append(leaf);

    let leaf2 = document.createElement("a-dodecahedron");
    leaf2.setAttribute("color", "#ffeaee");
    leaf2.setAttribute("position", "6.8 3.9 9.2");
    this.obj.append(leaf2);

    let leaf3 = document.createElement("a-dodecahedron");
    leaf3.setAttribute("color", "#ffb7c5");
    leaf3.setAttribute("position", "9.5 3 8.5");
    this.obj.append(leaf3);

    let leaf4 = document.createElement("a-dodecahedron");
    leaf4.setAttribute("color", "#ffeaee");
    leaf4.setAttribute("position", "9.5 3.9 6.3");
    leaf4.setAttribute("radius", "2");
    this.obj.append(leaf4);

    let leaf5 = document.createElement("a-dodecahedron");
    leaf5.setAttribute("color", "#ffb7c5");
    leaf5.setAttribute("position", "6 3 6.9");
    leaf5.setAttribute("radius", "1.2");
    this.obj.append(leaf5);

    let leaf6 = document.createElement("a-dodecahedron");
    leaf6.setAttribute("color", "#ffd1da");
    leaf6.setAttribute("position", "5.5 5.8 6.3");
    leaf6.setAttribute("radius", "1.8");
    this.obj.append(leaf6);

    let leaf7 = document.createElement("a-dodecahedron");
    leaf7.setAttribute("color", "#ffd1da");
    leaf7.setAttribute("position", "5.2 4.8 8.5");
    leaf7.setAttribute("radius", "1.6");
    this.obj.append(leaf7);

    let leaf8 = document.createElement("a-dodecahedron");
    leaf8.setAttribute("color", "#ffeaee");
    leaf8.setAttribute("position", "10 2.225 7.5");
    leaf8.setAttribute("radius", "0.6");
    this.obj.append(leaf8);
    
    let leaf9 = document.createElement("a-dodecahedron");
    leaf9.setAttribute("color", "#ffb7c5");
    leaf9.setAttribute("position", "8.5 4 4.5");
    leaf9.setAttribute("radius", "1.9");
    this.obj.append(leaf9);

    let leaf10 = document.createElement("a-dodecahedron");
    leaf10.setAttribute("color", "#ffd1da");
    leaf10.setAttribute("position", "5 4.5 6.5");
    leaf10.setAttribute("radius", "1.8");
    this.obj.append(leaf10);

    let leaf11 = document.createElement("a-dodecahedron");
    leaf11.setAttribute("color", "#ffeaee");
    leaf11.setAttribute("position", "6 3.5 5.5");
    leaf11.setAttribute("radius", "1.5");
    this.obj.append(leaf11);

    let leaf12 = document.createElement("a-dodecahedron");
    leaf12.setAttribute("color", "#ffd1da");
    leaf12.setAttribute("position", "6.5 3 3.5");
    leaf12.setAttribute("radius", "1.35");
    this.obj.append(leaf12);

    let leaf13 = document.createElement("a-dodecahedron");
    leaf13.setAttribute("color", "#ffb7c5");
    leaf13.setAttribute("position", "9.5 3 4.5");
    leaf13.setAttribute("radius", "1.5");
    this.obj.append(leaf13);

    this.obj.setAttribute("position", { x: x, y: 0, z: z });

    scene.append(this.obj);

  }

    
}
