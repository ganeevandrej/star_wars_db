import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ErrorBoundary } from "../error-boundary";
import { Spinner } from '../spinner';

import { Header } from '../header';
import RandomPlanet from "../random-planet";

import { SwapiService } from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { DummySwapiService } from "../../services/dummy-swapi-service";
import './app.css';

const PeoplePage = lazy(() => import("../pages/people-page"));
const PlanetsPage = lazy(() => import("../pages/planets-page"));
const StarshipsPage = lazy(() => import("../pages/starships-page"));

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
                        <div className="app">
                            <Header onServiceChange={ this.onChangeService } />

                            <RandomPlanet />

                            <Suspense fallback={<Spinner />}>
                                <Routes>
                                    <Route path="/" element={<h2>Welcome to StarDB</h2>}/>
                                    <Route path="/people/:id?" element={<PeoplePage/>}/>
                                    <Route path="/planets/:id?" element={<PlanetsPage/>}/>
                                    <Route path="/starships/:id?" element={<StarshipsPage/>}/>
                                    <Route path="*" element={<Navigate to="/" replace/>}/>
                                </Routes>
                            </Suspense>
                        </div>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}