import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  state = {
    paciente: '',
    edad: 0,
    peso: 0,
    notas: 0,
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = (name) => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, `${name}.pdf`);
      })
  }

  render() {
    return (
      <div className="App App-margin">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="img">
                <img className="img" src="https://user-images.githubusercontent.com/37750446/94746704-eafb6180-0342-11eb-8097-89d722e4b9ab.jpg"></img>
              </div>
            </div>
            <div className="col-10 header">
              <div className="row">
                <div className="col-12">Dra Yuridia Salazar Galvez</div>
                <br/><div className="especialidad col-12">ALERGIA E INMUNOLOGIA CLINICA</div>
                <br/><div className="universidad col-12">Universidad de Guadalajara</div>
                <br/><div className="credenciales col-12">Cédula Medicina General 7948253 / Cédula Pediatría 11028047 / Cédula en Alergia e Inmunología 11988279</div>
              </div>
            </div>
          </div>

        
          <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-lg-2">
              <label>
                Paciente:
              </label>
            </div>
            <div className="col-lg-10">
              <input type="text" id="paciente" name="paciente" onChange={this.handleChange} />
            </div>
            </div>
            <div className="row">
            <div className="col-lg-2">
              <label>
                Edad:
              </label>
            </div>
            <div className="col-lg-10">
              <input type="number" id="edad" name="edad" value={this.state.value} onChange={this.handleChange} />
            </div>
            </div>
            <div className="row">
            <div className="col-lg-2">
              <label>
                Peso:
              </label>
            </div>
            <div className="col-lg-10">
              <input type="number" name="peso" value={this.state.value} onChange={this.handleChange} />
            </div>
            </div>
          </form>

          <div className="row notas">
            <div className="col-lg-2">
              <label>
                Notas:
              </label>
            </div>
            <div className="col-lg-10">
              <textarea className="txt" type="text" name="notas" value={this.state.value} onChange={this.handleChange} />
            </div>
            </div>
        

          
          
          <div className="row inputs">
            <div className="col-lg-12 col-sm-12 boton">
              <button className="boton btn btn-dark" onClick={() => (this.createAndDownloadPdf(document.getElementById('paciente').value))}>Generar Receta</button>
            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;