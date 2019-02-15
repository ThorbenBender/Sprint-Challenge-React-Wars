import React, { Component } from 'react';
import './App.css';
import Characters from './components/Character';
import skipPage from './components/skipPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1
    };
  }
  skipPage = event =>{

  }
  componentDidMount() {
    const { page } = this.state;
    this.getCharacters('https://swapi.co/api/people/?page=' + page);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(URL);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="characters">
          <Characters starwarsChars={this.state.starwarsChars} />
        </div>
        <skipPage page={this.state.page} skipPage={this.skipPage}/> 
      </div>
    );
  }
}

export default App;
