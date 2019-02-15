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

            </div>
        </div>
    );
};

export default Character;