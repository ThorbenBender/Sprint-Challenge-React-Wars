import React, { Component } from 'react';
import './App.css';
import Characters from './components/Character';
import SkipPage from './components/skipPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      previous: ''
    };
  }
  skipPage = URL => {
    this.getCharacters(URL);
  }
  componentDidMount() {
    const { page } = this.state;
    this.getCharacters('https://swapi.co/api/people/');
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
        this.setState({ starwarsChars: data.results, next: data.next, previous: data.previous });
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
        <SkipPage page={this.state.page} skipPage={this.skipPage} previous={this.state.previous} next={this.state.next}/> 
      </div>
    );
  }
}

export default App;
