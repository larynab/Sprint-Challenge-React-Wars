import React from 'react';

function Planets(props) {
  return (
    <div className="char-card">
      <div className="char-info">
        <h3>{props.starwarsPlanets.name}</h3>
        <p>
          <strong>Rotation Period:</strong> {props.starwarsPlanets.rotation_period}
        </p>
        <p>
          <strong>Oribital Period:</strong> {props.starwarsPlanets.orbital_period}
        </p>
        <p>
          <strong>Diameter:</strong> {props.starwarsPlanets.diameter}
        </p>
        <p>
          <strong>Climate:</strong> {props.starwarsPlanets.climate}
        </p>
        <p>
          <strong>Gravity:</strong> {props.starwarsPlanets.gravity}
        </p>
        <p>
          <strong>Terrain:</strong> {props.starwarsPlanets.terrain}
        </p>
        <p>
          <strong>Surface Water:</strong> {props.starwarsPlanets.surface_water}
        </p>
        <p>
            <strong>Population:</strong> {props.starwarsPlanets.population}
        </p>

      </div>
    </div>
  );
}

export default Planets;
