import React from 'react';
import {compose, withChildFunction,
  withData, withSwapiService} from '../hok-helper';

import {ItemList} from '../item-list';

const mapPeopleMethodsToProps = ({getAllPeople}) => {
  return {
    getData: getAllPeople,
  };
};
const mapPlanetsMethodsToProps = ({getAllPlanets}) => {
  return {
    getData: getAllPlanets,
  };
};
const mapStarshipsMethodsToProps = ({getAllStarships}) => {
  return {
    getData: getAllStarships,
  };
};

const renderName = ({name}) => <span>{ name }</span>;
const renderModelAndName = ({name, model}) => {
  <span>{name}, ( { model } )</span>;
};

export const PersonList = compose(
    withSwapiService(mapPeopleMethodsToProps),
    withData,
    withChildFunction(renderName),
)(ItemList);

export const PlanetList = compose(
    withSwapiService(mapPlanetsMethodsToProps),
    withData,
    withChildFunction(renderName),
)(ItemList);

export const StarshipList = compose(
    withSwapiService(mapStarshipsMethodsToProps),
    withData,
    withChildFunction(renderModelAndName),
)(ItemList);
