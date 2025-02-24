class Rabbit {
  constructor(x, z) {

    this.dx = rnd(-10, 10) / 1000;
    this.x = x;
    this.z = z;
    this.dz = rnd(-10, 10) / 1000;
    this.move = true;

    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src", "#rabbit");
    this.obj.setAttribute("animation-mixer", { timeScale: 1.0 });
    this.obj.setAttribute("interact", "");
    this.obj.setAttribute("position", "0 -0.75 20");
    this.obj.setAttribute("scale", "0.03 0.03 0.03");

    this.obj.addEventListener("mouseenter", () => {
      this.obj.setAttribute("animation-mixer", "clip:Armature|Walk");
      this.obj.setAttribute("animation-mixer", { timeScale: 2.0 });
      this.move = true;
    })
    this.obj.addEventListener("mouseleave", () => {
      this.obj.setAttribute("animation-mixer", "clip:Armature|Idle");
      this.move = false;
    })

    this.obj.setAttribute("position", { x: x, y: -0.75, z: z });
    scene.append(this.obj);

  }

  walk() {
    if (this.move == true) {
      this.x += this.dx;
      this.z += this.dz;
      this.obj.setAttribute("position", { x: this.x, y: -1.4, z: this.z });
    }
  }

}
