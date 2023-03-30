import React, { Component } from 'react';

import {Spinner} from "../spinner";
import { ErrorIndicator } from "../error-indicator";

import { SwapiService } from "../../services/swapi-service";

import './random-planet.css';

export class RandomPlanet extends Component {
    state = {
        planet: {},
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.interval = setInterval(this.updatePlanet, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    swapiService = new SwapiService();

    onError = () => {
        this.setState(
            {
                error: true,
                loading: false
            });
    }

    onPlanetLoaded = (planet) => this.setState({
        planet,
        loading: false,
        error: false
    });

    updatePlanet = () => {
        const id = Math.ceil(Math.random() * 18) + 1;

        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMassage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={ planet } /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                { errorMassage }
                { spinner }
                { content }
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <>
            {}
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
            <div>
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">{ population }</span>
                        <span>123124</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">{ rotationPeriod }</span>
                        <span>43</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">{ diameter }</span>
                        <span>100</span>
                    </li>
                </ul>
            </div>
        </>
    );
}