import React, { Component } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ErrorBoundary } from "../error-boundary";
import { SwapiServiceProvider } from "../swapi-service-context";

import { Header } from '../header';
import RandomPlanet from "../random-planet";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsPage from "../pages/starships-page";

import { SwapiService } from "../../services/swapi-service";
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
                <SwapiServiceProvider value={this.state.swapiService}>
                    <BrowserRouter>
                        <div className="app">
                            <Header onServiceChange={this.onChangeService}/>

                            <RandomPlanet/>

                            <Routes>
                                <Route path="/" element={<h2>Welcome to StarDB</h2>}/>
                                <Route path="/people/:id?" element={<PeoplePage/>}/>
                                <Route path="/planets/:id?" element={<PlanetsPage/>}/>
                                <Route path="/starships/:id?" element={<StarshipsPage/>}/>
                                <Route path="*" element={<Navigate to="/" replace/>}/>
                            </Routes>
                        </div>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}