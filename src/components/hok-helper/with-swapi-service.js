import React from "react";

import { SwapiServiceConsumer } from "../swapi-service-context";

export const withSwapiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                { (swapiService) => {
                    const swapiServiceProps = mapMethodsToProps(swapiService);

                    return (
                        <Wrapped { ...props } { ...swapiServiceProps } />
                    );
                }}
            </SwapiServiceConsumer>
        );
    }
}