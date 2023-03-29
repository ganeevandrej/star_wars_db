import React, { Component } from 'react';

import { SwapiService } from "../../services/swapi-service";

import './random-planet.css';

export class RandomPlanet extends Component {

    constructor() {
        super();
        this.updatePlanet();
    }

    swapiService = new SwapiService();

    state = {
        planet: {}
    }

    onPlanetLoaded = (planet) => this.setState(planet);

    updatePlanet() {
        const id = Math.ceil(Math.random() * 18) + 1;

        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {
        const { planet: { id, name, population, rotationPeriod, diameter } } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
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
            </div>

        );
    }
}