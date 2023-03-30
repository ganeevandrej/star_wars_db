import React, { Component } from "react";

import { ItemList } from "../item-list";
import { PersonDetails } from "../person-details";

import "./people-page.css";
import {ErrorIndicator} from "../error-indicator";

export class PeoplePage extends Component {
    state = {
        selectedPerson: null,
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: false });
    }

    updateSelectedPerson(id) {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="row app mb2">
                <div className="col-md-6">
                    <ItemList onClickItem={ (id) => this.updateSelectedPerson(id) } />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={ this.state.selectedPerson } />
                </div>
            </div>
        );
    }
}