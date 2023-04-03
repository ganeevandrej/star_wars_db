import React from "react";

import { withSwapiService } from "../hok-helper";

import { ErrorBoundary } from "../error-boundary";
import { ItemDetails } from "../item-details";
import { Record } from "../record";

const PersonDetails = ( props ) => {
    return (
        <ErrorBoundary>
            <ItemDetails { ...props }>
                <Record label="Gender" field="gender" />
                <Record label="Eye Color" field="eyeColor" />
            </ItemDetails>
        </ErrorBoundary>
    );
};

const mapMethodsToProps = ({ getPerson, getPersonImageUrl }) => {
    return {
        getData: getPerson,
        getImageUrl: getPersonImageUrl
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);