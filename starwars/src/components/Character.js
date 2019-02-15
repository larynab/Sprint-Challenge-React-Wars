import React from 'react';

import './StarWars.css'

function Character(props) {
    return (
        <div className='char-card'>
            <div className='char-info'>
                <h3>{props.starwarsChars.name}</h3>
                <p>
                    <strong>Height:</strong> {props.starwarsChars.height}
                </p>
                <p>
                    <strong>Mass:</strong> {props.starwarsChars.mass}
                </p>
                <p>
                    <strong>Hair Color:</strong> {props.starwarsChars.hair_color}
                </p>
                <p>
                    <strong>Skin Color:</strong> {props.starwarsChars.skin_color}
                </p>
                <p>
                    <strong>Eye Color:</strong> {props.starwarsChars.eye_color}
                </p>
                <p>
                    <strong>Birth Year:</strong> {props.starwarsChars.birth_year}
                </p>
                <p>
                    <strong>Gender:</strong> {props.starwarsChars.gender}
                </p>                
            </div>
        </div>
    );
};

export default Character;