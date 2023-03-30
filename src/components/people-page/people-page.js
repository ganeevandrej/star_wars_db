import React, { Component } from "react";

import { PersonDetails, PersonList } from "../sw-components";

import { Row } from "../row";

import "./people-page.css";

export class PeoplePage extends Component {
    state = {
        selectedPerson: null
    }

    updateSelectedPerson(id) {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        const { selectedPerson } = this.state;

        const personList = (
            <PersonList onClickItem={ (id) => this.updateSelectedPerson(id) }>
                {(i) => `${i.name} ( ${i.birthYear} )`}
            </PersonList>
        );

        const personDetails = <PersonDetails itemId={ selectedPerson } />;

        return <Row left={ personList } right={ personDetails }  />;
    }
}