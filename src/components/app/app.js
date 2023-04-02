import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import { Header } from '../header';
import { RandomPlanet } from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { ErrorBoundary } from "../error-boundary";

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
            <ErrorBoundary>
                <SwapiServiceProvider value={ this.state.swapiService }>
                    <BrowserRouter>
                        <div>
                            <Header onServiceChange={this.onChangeService}/>

                            <RandomPlanet/>

                            <Routes>
                                <Route path="/" element={<h2>Welcome to StarDB</h2>} />
                                <Route path="/people/:id?" element={ <PeoplePage /> } />
                                <Route path="/planets/:id?" element={ <PlanetsPage /> } />
                                <Route path="/starships/:id?" element={ <StarshipsPage /> } />
                            </Routes>

                        </div>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}