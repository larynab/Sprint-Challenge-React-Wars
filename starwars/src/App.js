import React, { Component } from 'react';
import './App.css';

import Character from './components/Character';
import Planets from './components/Planets';
import AppDog from './AppDog';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsPlanets: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
    this.getPlanets('https://swapi.co/api/planets');
  }

  getCharacters = URL => {

    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getPlanets = URL => {

    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsPlanets: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>React Wars</h1>
        </div>
        <div className="Navigation">
        <p><a href="#Plants">Planets</a></p>
        <p><a href="#Dogs">Random Dogs</a></p>
        </div>
        <h2>Characters</h2>
        <div className='char-list'>
          {this.state.starwarsChars.map((charmap, index) => ( //index as number or unique
          <Character key={index} starwarsChars={charmap} />
          ))}
        </div>
        <h2>Planets</h2>  
        <div className="char-list">
          {this.state.starwarsPlanets.map((planmap, indexB) => (
          <Planets key={indexB} starwarsPlanets={planmap} />
          ))}            
        </div>
        <AppDog />
      </div>
    );
  }
}

export default App;
