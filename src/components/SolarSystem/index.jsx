import React from 'react';
import PlanetCard from '../PlanetCard';
import Title from '../Title';

import Planets from '../../data/planets';

export default class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          Planets.map(({ name, image }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />
          ))
        }
      </div>
    );
  }
}
