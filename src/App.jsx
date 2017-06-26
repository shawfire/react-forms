import React, { Component } from 'react';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './styles.css';
import FormContainer from './containers/FormContainer';
import Form from './components/Form';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Form />
        <div className="columns">
          <div className="col-md-9 centered">
            <h3>React.js Controlled Form Components</h3>
            <FormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
