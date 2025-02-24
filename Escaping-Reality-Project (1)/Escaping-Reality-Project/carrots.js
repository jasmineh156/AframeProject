class Carrot {

  constructor(x, z) {

    this.dx = rnd(-10, 10) / 100;
    this.x = x;
    this.z = z;
    this.dz = rnd(-10, 10) / 100;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("interact", "");

    let carrot1 = document.createElement("a-cone");
    carrot1.setAttribute("interact", "");
    carrot1.setAttribute("position", "3 -1.5 10.25");
    carrot1.setAttribute("radius-bottom", "0.2");
    carrot1.setAttribute("rotation", "180 0 0");
    carrot1.setAttribute("color", "#ed8a09");
    this.obj.append(carrot1);

    let carrot2 = document.createElement("a-cone");
    carrot2.setAttribute("position", "3.5 -1.5 10");
    carrot2.setAttribute("radius-bottom", "0.2");
    carrot2.setAttribute("rotation", "180 0 0");
    carrot2.setAttribute("color", "#ed8a09");
    this.obj.append(carrot2);

    let carrot3 = document.createElement("a-cone");
    carrot3.setAttribute("position", "2.5 -1.5 10");
    carrot3.setAttribute("radius-bottom", "0.2");
    carrot3.setAttribute("rotation", "180 0 0");
    carrot3.setAttribute("color", "#ed8a09");
    this.obj.append(carrot3);

    let stem1 = document.createElement("a-cone");
    stem1.setAttribute("position", "3 -1 10.23");
    stem1.setAttribute("radius-bottom", "0.12");
    stem1.setAttribute("radius-top", "0.05");
    stem1.setAttribute("rotation", "180 0 0");
    stem1.setAttribute("color", "green");
    stem1.setAttribute("height", "0.5");
    this.obj.append(stem1);

    let stem2 = document.createElement("a-cone");
    stem2.setAttribute("position", "3.5 -1 10");
    stem2.setAttribute("radius-bottom", "0.12");
    stem2.setAttribute("radius-top", "0.05");
    stem2.setAttribute("rotation", "180 0 0");
    stem2.setAttribute("color", "green");
    stem2.setAttribute("height", "0.5");
    this.obj.append(stem2);

    let stem3 = document.createElement("a-cone");
    stem3.setAttribute("position", "2.5 -1 10");
    stem3.setAttribute("radius-bottom", "0.12");
    stem3.setAttribute("radius-top", "0.05");
    stem3.setAttribute("rotation", "180 0 0");
    stem3.setAttribute("color", "green");
    stem3.setAttribute("height", "0.5");
    this.obj.append(stem3);

    let mud = document.createElement("a-cone");
    mud.setAttribute("position", "2.5 -1.4 10");
    mud.setAttribute("rotation", "180 0 0");
    mud.setAttribute("radius-bottom", "0.45");
    mud.setAttribute("color", "#4f2207");
    mud.setAttribute("height", "0.1");
    this.obj.append(mud)

    let mud2 = document.createElement("a-cone");
    mud2.setAttribute("position", "3.2 -1.4 10.1");
    mud2.setAttribute("rotation", "180 0 0");
    mud2.setAttribute("radius-bottom", "0.65");
    mud2.setAttribute("color", "#4f2207");
    mud2.setAttribute("height", "0.1");
    this.obj.append(mud2);

    this.obj.addEventListener("click", () => {
      this.flag = true;
      this.obj.setAttribute("opacity", "0 0 0");
    })
    
    
    this.obj.setAttribute("position", { x: x, y: 0, z: z });
    scene.append(this.obj);

  }

  }

