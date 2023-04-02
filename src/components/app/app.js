import React, { Component } from 'react';

import { Header } from '../header';
import { RandomPlanet } from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";

import { SwapiService } from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { DummySwapiService } from "../../services/dummy-swapi-service";

import './app.css';

export class App extends Component {
    state = {
        swapiService: new SwapiService()
    }

    onChangeService = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService
                ? DummySwapiService
                : SwapiService;

            return {
                swapiService: new Service()
            }
        })
    }

    render() {
        return (
            <div>
                <SwapiServiceProvider value={ this.state.swapiService }>
                    <Header onServiceChange={ this.onChangeService } />

                    <RandomPlanet />

                    <PeoplePage />
                    <PlanetsPage />
                    <StarshipsPage />
                </SwapiServiceProvider>
            </div>
        );
    }
}