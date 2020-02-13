// import React, {Component} from 'react';
// import SingleInput from '../components/SingleInput';

// class FormContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: '',
//       name: '',
//       city: ''
//     };
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.handleClearForm = this.handleClearForm.bind(this);
//   }
//   componentDidMount() {
//     // simulating a call to retrieve user data
//     // (create-react-app comes with fetch polyfills!)
//     fetch('https://poliglota-api-simon.herokuapp.com/')
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           name: data.name,
//           city: data.city
//         });
//       });
//   }
//   handleClearForm(e) {
//     e.preventDefault();
//     this.setState({
//       name: '',
//       city: ''
//     });
//   }
//   handleNameChange(e) {
//     this.setState({ name: e.target.value });
//   }
//   handleCityChange(e) {
//     this.setState({ city: e.target.value });
//   }
//   handleFormSubmit(e) {
//     e.preventDefault();

//     const formPayload = {
//       name: this.state.name,
//       city: this.state.city
//     };

//     console.log('Send this in a POST request:', formPayload)
//     this.handleClearForm(e);
//   }
//   render() {
//     return (
//       <form className="container" onSubmit={this.handleFormSubmit}>
//         <h3>Formulario</h3>
//         <SingleInput
//           inputType={"text"}
//           title={"name"}
//           name={"name"}
//           controlFunc={this.handleNameChange}
//           content={this.state.name}
//           placeholder={"Type your name here"}
//         />
//         <SingleInput
//           inputType={"text"}
//           title={"city"}
//           name={"city"}
//           controlFunc={this.handleCityChange}
//           content={this.state.city}
//           placeholder={"Type your city here"}
//         />
//         <input
//           type="submit"
//           className="btn btn-primary"
//           value="Submit"
//         />
//         <button
//           className="btn btn-link"
//           onClick={this.handleClearForm}
//         >
//           Clear form
//         </button>
//       </form>
//     );
//   }
// }

// export default FormContainer;