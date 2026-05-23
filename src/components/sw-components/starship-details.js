import React from 'react';

import {withSwapiService} from '../hok-helper';

import {ErrorBoundary} from '../error-boundary';
import ItemDetails from '../item-details';
import {Record} from '../record';

const StarshipDetails = ( props ) => {
  return (
    <ErrorBoundary>
      <ItemDetails { ...props }>
        <Record label="Model" field="model" />
        <Record label="Manufacturer" field="manufacturer" />
        <Record label="Length" field="length" />
        <Record label="Cost" field="costInCredits" />
        <Record label="Crew" field="crew" />
        <Record label="Passengers" field="passengers" />
        <Record label="Cargo Capacity" field="cargoCapacity" />
      </ItemDetails>
    </ErrorBoundary>
  );
};

const mapMethodsToProps = ({getStarship, getStarshipImageUrl}) => {
  return {
    getData: getStarship,
    getImageUrl: getStarshipImageUrl,
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
