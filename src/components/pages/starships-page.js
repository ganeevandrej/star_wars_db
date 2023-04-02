import React, { Component } from "react";

import { StarshipDetails, StarshipList } from "../sw-components";

import { Row } from "../row";

export class StarshipsPage extends Component {
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
                left={ <StarshipList onClickItem={ this.updateSelectedPerson } /> }
                right={ <StarshipDetails itemId={ selectedPerson } /> }
            />
        );
    }
}