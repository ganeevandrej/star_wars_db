import React, { Component } from 'react';

import { Header } from '../header';
import { RandomPlanet } from '../random-planet';

import './app.css';
import {ErrorButton} from "../error-button";
import {ErrorIndicator} from "../error-indicator";
import {PeoplePage} from "../people-page";

export class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: false });
    }

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

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