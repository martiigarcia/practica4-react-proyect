import React, { Component } from 'react'
import './Estudiante.css';

export default class Estudiante extends Component {
  render() {
    let objeto = {
      nombre:'Martina',
      apellido:'Garcia',
      edad:'20',
    };
    
    return (
      <div>
        <p className='estilo'>{objeto.nombre} {objeto.apellido}, edad: {objeto.edad}</p>
      </div>
    )
  }
}
