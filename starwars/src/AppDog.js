import React, { Component } from 'react';
import './App.css';

import Dog from './componentsdog/Dog';

class AppDog extends Component {
  constructor() {
    super();
    this.state = {
      randomDogs: []
    };
  }

  componentDidMount() {
    // for (let i=0; i < 10; i++) {
    this.getDogs('https://dog.ceo/api/breed/hound/images/random/10');
    // this.state.randomDogs.push([i]); 
    // } EXPERIEMENT
  }

  getDogs = URL => {

    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ randomDogs: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });


  };

  render() {
    return (
      <div className="App">
        <h2>Dogs</h2>
        <div className='char-list'>
          {this.state.randomDogs.map((dogmap, message) => (
          <Dog key={message} randomDogs={dogmap} />))}
        </div>
      </div>
    );
  }
}
export default AppDog;
