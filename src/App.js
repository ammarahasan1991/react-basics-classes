import { Component } from 'react';
import './App.css'
import Header from './components/Header';
import Team from './components/Team';



class App extends Component {

  constructor() {
    super();
    this.state = {
      number: 0
    }

    this.clickHandler = this.clickHandler.bind(this);
  }


  clickHandler() {
    this.setState(prevState => {
      return {
        number: prevState.number + 1
      };
    });
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <Team />

        <h3>{this.state.number}</h3>

        <button className='btn-primary' onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default App;