import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      articulos: []
    }
  }

  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');

    promesa.then(response => response.json()).then(data=>{
      this.setState({
        articulos:data
      })
    })
  }

  render(){
    return(
      <div>
        {
          this.state.articulos.map((articulos)=>{
            return <p>{articulos.title}</p>
          })    
        }
      </div>
    )
  }
  
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Blog />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
