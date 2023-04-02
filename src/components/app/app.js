import React, { Component } from 'react';

import { Header } from '../header';
import { RandomPlanet } from '../random-planet';
import { ErrorButton } from "../error-button";
import { PeoplePage } from "../people-page";

import { SwapiService } from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { DummySwapiService } from "../../services/dummy-swapi-service";

import './app.css';

export class App extends Component {
    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService()
    }


    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

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
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div>
                <SwapiServiceProvider value={ this.state.swapiService }>
                    <Header onServiceChange={ this.onChangeService } />
                    {planet}

                    <div className="block-btns row mb2 button-row">
                        <button
                            className="toggle toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                        </button>
                        <ErrorButton/>
                    </div>
                    <PeoplePage/>
                </SwapiServiceProvider>
            </div>
        );
    }
}