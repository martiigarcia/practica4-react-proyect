import React, { Component } from "react";
import "./Curso.css";

export default class Cursos extends Component {
  constructor(props) {
    super(props);
    this.listarCursos = this.listarCursos.bind(this);
    this.listarCursosEstudiante = this.listarCursosEstudiante.bind(this);

    this.state = {
      listaCursos: [],
      estudiante: [],
    };
  }

  listarCursos() {
    fetch("/archivoCursos.json")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          listaCursos: json.cursos,
          resultado: json.result,
        });
      });
  }

  listarCursosEstudiante() {
    fetch("/archivoEstudiantes.json?apellido=Garcia")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          estudiante:
            json.estudiantes[0].nombre + " " + json.estudiantes[0].apellido,
          listaCursos: json.estudiantes[0].cursos,
          resultado: json.result,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="estiloCursos">
          <button onClick={this.listarCursos}>listar cursos</button>
          <button onClick={this.listarCursosEstudiante}>
            listar primer estudiante
          </button>
          <p>
            {this.state.estudiante
              ? "Estudiante: " + this.state.estudiante
              : ""}
          </p>

          <table border="1">
            <caption>Lista de Cursos</caption>

            <tbody>
              <th>indice</th>
              <th>Nombre</th>

              {this.state.listaCursos.map((e, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{e.curso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
