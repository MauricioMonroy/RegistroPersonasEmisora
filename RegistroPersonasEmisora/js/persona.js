//Creación del objeto Persona
class Persona {
  constructor(nombreCompleto, cedula, fechaNacimiento, email, ciudadResidencia, ciudadOrigen, artistaFavorito, cancion1, cancion2, cancion3) {
    this._nombreCompleto = nombreCompleto;
    this._cedula = cedula;
    this._fechaNacimiento = fechaNacimiento;
    this._email = email;
    this._ciudadResidencia = ciudadResidencia;
    this._ciudadOrigen = ciudadOrigen;
    this._artistaFavorito = artistaFavorito;
    this._cancion1 = cancion1;
    this._cancion2 = cancion2;
    this._cancion3 = cancion3;    
  }

  //Métodos Get y Set, que permiten añadir los datos de manera dinámica
  get nombreCompleto() {
    return this._nombreCompleto;
  }
  set nombreCompleto(nombreCompleto) {
    this._nombreCompleto = nombreCompleto;
  }

  get cedula() {
    return this._cedula;
  }
  set cedula(cedula) {
    this._cedula = cedula;
  }

  get fechaNacimiento() {
    return this._fechaNacimiento;
  }
  set fechaNacimiento(fechaNacimiento) {
    this._fechaNacimiento = fechaNacimiento;
  }

  get email() {
    return this._email;
  }
  set email(email) {
    this._email = email;
  }

  get ciudadResidencia() {
    return this._ciudadResidencia;
  }
  set ciudadResidencia(ciudadResidencia) {
    this._ciudadResidencia = ciudadResidencia;
  }

  get ciudadOrigen() {
    return this._ciudadOrigen;
  }
  set ciudadOrigen(ciudadOrigen) {
    this._ciudadOrigen = ciudadOrigen;
  }

  get artistaFavorito() {
    return this._artistaFavorito;
  }
  set artistaFavorito(artistaFavorito) {
    this._artistaFavorito = artistaFavorito;
  }

  get cancion1() {
    return this._cancion1;
  }
  set cancion1(cancion1) {
    this._cancion1 = cancion1;
  }

  get cancion2() {
    return this._cancion2;
  }
  set cancion2(cancion2) {
    this._cancion2 = cancion2;
  }

  get cancion3() {
    return this._cancion3;
  }
  set cancion3(cancion3) {
    this._cancion3 = cancion3;
  }
}