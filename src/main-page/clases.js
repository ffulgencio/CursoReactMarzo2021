class Persona {
  constructor(nombre, apellido, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
}

class Estudiante extends Persona {
  constructor(nombre, apellido, telefono, edad) {
    super(nombre, apellido, telefono);
    this.edad = edad;
  }
}

class Profesor extends Persona {
  constructor(nombre, apellido, telefono, edad) {
    super(nombre, apellido, telefono);
    this.edad = edad;
  }
}

let profe1 = new Profesor("juan", "Manzueta", "809-555-5555");

class Curso {
  // metodo constructor
  constructor(titulo, cupos) {
    this.titulo = titulo;
    this.cupos = cupos;
    this.inscritos = 0;
  }

  // methodo
  inscribirEstudiante() {
    if (this.inscritos < this.cupos) {
      this.inscritos = this.inscritos + 1;
    }
  }
}

let cur1 = new Curso("Introduccion a React", 5);
cur1.inscribirEstudiante();

let est1 = new Estudiante("Jhon", "Snow", "809-220-1111", 21);
let est2 = new Estudiante("Mary", "Rodriguez", "809-476-6000", 20);
