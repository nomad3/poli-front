import React from 'react';
// import logo from './assets/logo.svg';
import '../styles/App.css';
// import FormContainer from './FormContainer';
// import { Provider } from 'react-redux';

const dataList = [
  {'id': 1, 'name': 'Poliglotón', 'city': 'Santiago'},
  {'id': 2, 'name': 'Carlos', 'city': 'Santiago'},
  {'id': 3, 'name': 'Nicolás', 'city': 'Lima'},
  {'id': 4, 'name': 'José', 'city': 'Ciudad de México'}
];

const ListUsersContainer = props => (
  <div className="col-md-6 container pt-5">
    <h3 className="text-left">Listado</h3>
    {dataList.map(data => (
      <div key={data.id} style={{ border: "1px solid #eee" }}>
        <h4>{data.name}</h4>
        <p>{data.city}</p>
      </div>
    ))}
  </div>
);

let CustomForm = props => (
  <div className="col-md-6 container pt-5">
    <div className="card form-group">
      <div className="card-body">
        <h3>Formulario</h3>
        <div className="form-group text-left">
          <label htmlFor="name">Email address</label>
          <input
            type="text"
            className="form-control mb-3"
            id="name"
            name="name"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            className="form-control mb-3"
            id="city"
            name="city"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  </div>
);


function App() {
  return (
    
    <div className="App container">
      <div className="row">
        <ListUsersContainer/>
        <CustomForm/>
      </div>
    </div>
  );
}

export default App;
