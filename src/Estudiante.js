import React, { Component } from 'react'
import './Estudiante.css';

export default class Estudiante extends Component {

  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
   
    this.state={
      cursos: [{nombre: 'React', horas:'20'}],

      listaCursos: [{nombre: 'React', horas:'10'},
      {nombre: 'Angular', horas:'15'},
      {nombre: 'Seminario', horas:'30'},
      {nombre: 'Ingenieria', horas:'25'},
      {nombre: 'Bases de datos', horas:'20'},
      {nombre: 'IPV6', horas:'10'},
      {nombre: 'Programacion concurrente', horas:'30'},
      {nombre: 'Programacion orientada a objetos', horas:'35'}]
    }


  }
 handleClick(){
    this.setState((state)=>({
      
       cursos:[...state.cursos, state.listaCursos[Math.floor(Math.random()*8)]],
    }));
  }

  render() {
    
    return (
      <div>
        <p className='estilo'>Nombre y apellido: {this.props.persona.nombre} {this.props.persona.apellido}</p>
       
        <button onClick={this.handleClick}>Incribirse!</button>
        <table border='1' className='estilo'>
          <caption>Lista de cursos</caption>
        <tbody>
            <th>Nombre</th>
            <th>Horas</th>
          
            {this.state.cursos.map((curso,index)=>(
                <tr>

                 <td>{curso.nombre}</td>
                 <td>{curso.horas} horas semanales</td>
                </tr>
              ))
              }
            
        
          
            </tbody>
        </table>
        


      </div>
    )
  }
}
