import { Component } from 'react';
import './App.css'
import Header from './components/Header';
import Team from './components/Team';



class App extends Component {

  constructor() {
    super();
    this.state = {
      answer: 'Yes'
    }
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <Team />
      </div>
    );
  }
}

export default App;