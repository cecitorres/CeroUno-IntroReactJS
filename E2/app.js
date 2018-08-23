/* 1) Class components */
// class Greeting extends React.Component {
//   render() {
//     return (
//         <h1>Soy un componente tipo clase!</h1>
//     );
//   }
// }

// ReactDOM.render(
//     <Greeting />,
//     document.getElementById('app')
// );

/* 2) Class state */
// class Greeting extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Ceci'
//     }
//   }
//   render() {
//     return (
//         <h1>Hola {this.state.name}!</h1>
//     );
//   }
// }

// ReactDOM.render(
//     <Greeting/>,
//     document.getElementById('app')
// );

/* 3) Class & functional components */
function Greeting(props) {
    return (
        <h1>Hola {props.name}!</h1>
    );
}
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Ceci' },
        { name: 'Sara' },
        { name: 'Alex'}
      ]
    }
    this.text = 'Prueba';
  }
  render() {
    console.log(this.text);
    return (
      <div>
        <Greeting name={this.state.persons[0].name} />
        <Greeting name={this.state.persons[1].name} />
        <Greeting name={this.state.persons[2].name} />
      </div>
    );
  }
}

ReactDOM.render(
    <Container />,
    document.getElementById('app')
);
