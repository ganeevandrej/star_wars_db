import React, { Component } from "react";

import { Spinner } from "../spinner";
import { ErrorIndicator } from "../error-indicator";

export const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
            error: false,
        }

        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({ data });
                })
                .catch(() => {
                    this.setState({ error: true });
                });
        }
        render() {
            const { data, error } = this.state;

            const content = data ? <View { ...this.props } data={ data } /> : <Spinner />;

            if(error) {
                return <ErrorIndicator />
            }

            return content;
        }
    }
}