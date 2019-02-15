import React, { Component } from 'react';
import './App.css';

import Dog from './componentsdog/Dog';

class AppDog extends Component {
  constructor() {
    super();
    this.state = {
      randomDogs: [
        {
          
        }
      ]
    };
  }

  componentDidMount() {
    this.getDogs('https://dog.ceo/api/breeds/image');
  }

  getDogs = URL => {

    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ randomDogs: data.results });
      })

  };

  render() {
    return (
      <div className="App">
        <h2>Dogs</h2>
        <div className='char-list'>
          {this.state.randomDogs.map((dogmap, index) => (
          <Dog key={index} randomDogs={dogmap} />
          ))}
        </div>
      </div>
    );
  }
}
export default AppDog;
