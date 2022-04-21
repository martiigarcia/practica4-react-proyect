import React, { Component } from "react";
import "./CrearEstudiante.css";

export default class crearEstudiante extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      form: {
        nombre: "",
        apellido: "",
        cursos: "",
      },
      resultado: "",
      listaCursos: [],
    };
  }

  handleChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;

    this.setState((state) => ({
      form: {
        ...state.form,
        [nombre]: valor,
      },
    }));
  }
  handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:1234/estudiantes", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.form.nombre,
        apellido: this.state.form.apellido,
        cursos: [this.state.form.cursos],
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result === "error") {
          this.setState({
            resultado: json.result,
          });
          return;
        }
        this.setState({
          resultado: "El estudiante fue creado exitosamente.",
        });
      });
  }

  componentDidMount() {
    fetch("http://localhost:1234/cursos")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          listaCursos: json.cursos,
          resultado: json.result,
        });
      });
  }

  render() {
    return (
      <div className="estiloCrearEstudiante">
        <form>
          <select name="cursos" onChange={this.handleChange}>
            {this.state.listaCursos.map((c) => (
              <option value={c.id}>{c.curso}</option>
            ))}
          </select>
          <label>
            Nombre:{" "}
            <input
              type="text"
              name="nombre"
              value={this.state.form.nombre}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Apellido:{" "}
            <input
              type="text"
              name="apellido"
              value={this.state.form.apellido}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" onClick={this.handleSubmit}>
            Confirmar
          </button>
        </form>
        <p>{this.state.resultado}</p>
      </div>
    );
  }
}
