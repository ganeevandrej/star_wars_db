import React, {Component} from 'react';
import {withSwapiService} from '../hok-helper';

import {Spinner} from '../spinner';
import {ErrorIndicator} from '../error-indicator';
import {PlanetView} from './planet-view';

import './random-planet.css';

class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 5000,
    planetIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  state = {
    planet: null,
    planetImageUrl: null,
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.startInterval();
  }

  componentDidUpdate(prevProps) {
    const serviceChanged = prevProps.getData !== this.props.getData ||
      prevProps.getImageUrl !== this.props.getImageUrl;
    const intervalChanged =
      prevProps.updateInterval !== this.props.updateInterval;

    if (serviceChanged) {
      this.updatePlanet();
    }

    if (serviceChanged || intervalChanged) {
      this.startInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startInterval = () => {
    const {updateInterval} = this.props;

    clearInterval(this.interval);
    this.interval = setInterval(this.updatePlanet, updateInterval);
  };

  updatePlanet = () => {
    const {planetIds, getData, getImageUrl} = this.props;
    const randomIndex = Math.floor(Math.random() * planetIds.length);
    const id = planetIds[randomIndex];

    this.setState({
      loading: true,
      error: false,
    });

    getData(id)
        .then((planet) => this.setState({
          planet,
          planetImageUrl: getImageUrl(planet),
          loading: false,
          error: false,
        }))
        .catch(() => this.setState({
          error: true,
          loading: false,
        }));
  };

  render() {
    const {planet, planetImageUrl, loading, error} = this.state;

    const isPlanet = planet ?
      <PlanetView planet={ planet } planetImageUrl={ planetImageUrl } /> :
      null;
    const isLoading = loading ? <Spinner /> : isPlanet;
    const content = error ? <ErrorIndicator /> : isLoading;

    return (
      <div className="random-planet jumbotron rounded">
        { content }
      </div>
    );
  }
}

const mapPlanetMethodsToProps = ({getPlanet, getPlanetImageUrl}) => {
  return {
    getData: getPlanet,
    getImageUrl: getPlanetImageUrl,
  };
};

export default withSwapiService(mapPlanetMethodsToProps)(RandomPlanet);
