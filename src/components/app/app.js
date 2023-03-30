import React, { Component } from 'react';

import { Header } from '../header';
import { RandomPlanet } from '../random-planet';
import { ErrorButton } from "../error-button";
import { PeoplePage } from "../people-page";

import './app.css';

export class App extends Component {
    state = {
        showRandomPlanet: true,
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div>
                <Header />
                { planet }

                <div className="block-btns row mb2 button-row">
                    <button
                        className="toggle toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton />
                </div>
                <PeoplePage />
            </div>
        );
    }
};