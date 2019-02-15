import React from 'react';

import '../components/StarWars.css'

function Dog(props) {
    return (
        <div className='char-card'>
            <div className='char-info'>
                <img src={props.randomDogs.message} alt="Dog" />               
            </div>
        </div>
    );
};

export default Dog;