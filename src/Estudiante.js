import React, { Component } from "react";
import "./Estudiante.css";

export default class ListarEstudiantes extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.listarEstudiantes = this.listarEstudiantes.bind(this);

    this.state = {
      listaEstudiantes: [],
      cursos: [{ nombre: "React", horas: "20" }],
      listaCursos: [
        { nombre: "React", horas: "10" },
        { nombre: "Angular", horas: "15" },
        { nombre: "Seminario", horas: "30" },
        { nombre: "Ingenieria", horas: "25" },
        { nombre: "Bases de datos", horas: "20" },
        { nombre: "IPV6", horas: "10" },
        { nombre: "Programacion concurrente", horas: "30" },
        { nombre: "Programacion orientada a objetos", horas: "35" },
      ],
    };
  }

  handleClick() {
    this.setState((state) => ({
      cursos: [
        ...state.cursos,
        state.listaCursos[Math.floor(Math.random() * 8)],
      ],
    }));
  }

  listarEstudiantes() {
    fetch("/archivoEstudiantes.json")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          listaEstudiantes: json.estudiantes,
          resultado: json.result,
        });
      });
    console.log(this.state.listaEstudiantes);
  }

  render() {
    return (
      <div>
        <div className="estilo">
          <p>
            Nombre y apellido: {this.props.persona.nombre}{" "}
            {this.props.persona.apellido}
          </p>

          <button onClick={this.handleClick}>Incribirse!</button>
          <table border="1">
            <caption>Lista de cursos</caption>
            <tbody>
              <th>indice</th>
              <th>Nombre</th>
              <th>Horas</th>

              {this.state.cursos.map((curso, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{curso.nombre}</td>
                  <td>{curso.horas} horas semanales</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="estilo">
          <button onClick={this.listarEstudiantes}>listar estudiantes</button>
          <table border="1">
            <caption>Lista de Estudiantes</caption>
            <tbody>
              <th>indice</th>
              <th>Nombre</th>
              <th>Apellido</th>

              {this.state.listaEstudiantes.map((e, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{e.nombre}</td>
                  <td>{e.apellido}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )
      </div>
    );
  }
}
