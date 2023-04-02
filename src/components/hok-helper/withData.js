import React, { Component } from "react";

import { Spinner } from "../spinner";
import { ErrorIndicator } from "../error-indicator";

export const withData = ( View ) => {
    return class extends Component {
        state = {
            data: [],
            loading: false,
            error: false
        }

        componentDidMount() {
           this.update();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if( this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        update = () => {
            this.setState({
                loading: true,
                error: false,
            })
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    });
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false
                    });
                });
        }

        render() {
            const { data, error, loading } = this.state;

            if(error) {
                return <ErrorIndicator />
            }

            if(loading) {
                return <Spinner />
            }

            return <View { ...this.props } data={ data } />;
        }
    }
}