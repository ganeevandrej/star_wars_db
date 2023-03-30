import React, { Component } from 'react';

import { Header } from '../header';
import { RandomPlanet } from '../random-planet';
import { ItemList } from '../item-list';
import { PersonDetails } from '../person-details';

import './app.css';

export class App extends Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: null
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    updateSelectedPerson(id) {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div>
                <Header />
                { planet }

                <div className="block-btns row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                </div>

                <div className="row app mb2">
                    <div className="col-md-6">
                        <ItemList onClickItem={ (id) => this.updateSelectedPerson(id) } />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={ this.state.selectedPerson } />
                    </div>
                </div>
            </div>
        );
    }
};