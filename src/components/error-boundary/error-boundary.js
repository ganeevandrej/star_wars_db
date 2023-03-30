import React, {Component} from "react";

import { ErrorIndicator } from "../error-indicator";

import "./error-boundary.css";

export class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: false });
    }

    render() {
        const content = this.state.hasError ? <ErrorIndicator /> : this.props.children;

        return content ;
    }
}