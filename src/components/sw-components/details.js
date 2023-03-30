import React from "react";

import { ItemDetails } from "../item-details";
import { Record } from "../record";
import { ErrorBoundary } from "../error-boundary";
import { SwapiService } from "../../services/swapi-service";

const {
    getPerson, getPersonImageUrl, getPlanet,
    getPlanetImageUrl, getStarship, getStarshipImageUrl } = new SwapiService();


export const PersonDetails = ({ itemId }) => {
    return (
        <ErrorBoundary>
            <ItemDetails
                itemId={itemId}
                getData={ getPerson }
                getImageUrl={ getPersonImageUrl }
            >
                <Record label="Gender" field="gender" />
                <Record label="Eye Color" field="eyeColor" />
            </ItemDetails>
    </ErrorBoundary>
    );
};
export const PlanetDetails = ({ itemId }) => {
    return (
        <ErrorBoundary>
            <ItemDetails
                itemId={itemId}
                getData={ getPlanet }
                getImageUrl={ getPlanetImageUrl }
            >
                <Record label="Population" field="population" />
                <Record label="Rotation Period" field="rotationPeriod" />
                <Record label="Diameter" field="diameter" />
            </ItemDetails>
        </ErrorBoundary>
    );
};
export const StarshipDetails = ({ itemId }) => {
    return (
        <ErrorBoundary>
            <ItemDetails
                itemId={itemId}
                getData={ getStarship }
                getImageUrl={ getStarshipImageUrl }
            >
                <Record label="Model" field="model" />
                <Record label="Length" field="length" />
                <Record label="Cost" field="costInCredits" />
            </ItemDetails>
        </ErrorBoundary>
    );
};