import React, { Component } from "react";

import { PlanetDetails, PlanetList } from "../sw-components";

import { Row } from "../row";

export class PlanetsPage extends Component {
    state = {
        selectedPerson: null
    }

    updateSelectedPerson = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        const { selectedPerson } = this.state;

        return (
            <Row
                left={ <PlanetList onClickItem={ this.updateSelectedPerson } /> }
                right={ <PlanetDetails itemId={ selectedPerson } /> }
            />
        );
    }
}