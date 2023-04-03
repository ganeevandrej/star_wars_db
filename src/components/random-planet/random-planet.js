import React, { Component } from 'react';
import { withSwapiService } from "../hok-helper";

import { Spinner } from "../spinner";
import { ErrorIndicator } from "../error-indicator";
import { PlanetView } from "./planet-view";

import './random-planet.css';

class RandomPlanet extends Component {
    static defaultProps = {
        updateInterval: 5000
    }

    state = {
        planet: null,
        loading: false,
        error: false,
    }

    componentDidMount() {
        const { updateInterval } = this.props;

        this.setState({
            loading: true,
            error: false
        });

        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updatePlanet = () => {
        const id = Math.ceil(Math.random() * 18) + 1;

        this.props.getData(id)
            .then((planet) => this.setState({
                planet,
                loading: false,
                error: false
            }))
            .catch(() => this.setState({
                error: true,
                loading: false
            }));
    }

    render() {
        const { planet, loading, error } = this.state;

        const isPlanet = planet ? <PlanetView planet={ planet } /> : null;
        const isLoading = loading ? <Spinner /> : isPlanet;
        const content =  error ? <ErrorIndicator /> : isLoading;

        return (
            <div className="random-planet jumbotron rounded">
                { content }
            </div>
        );
    }
}

const mapStarshipsMethodsToProps = ({ getPlanet }) => {
    return {
        getData: getPlanet
    }
}

export default withSwapiService(mapStarshipsMethodsToProps)(RandomPlanet);