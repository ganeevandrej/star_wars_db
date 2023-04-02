import React, { Component } from "react";

import { PersonDetails, PersonList } from "../sw-components";

import { Row } from "../row";

export class PeoplePage extends Component {
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
                left={ <PersonList onClickItem={ this.updateSelectedPerson } /> }
                right={ <PersonDetails itemId={ selectedPerson } /> }
            />
        );
    }
}