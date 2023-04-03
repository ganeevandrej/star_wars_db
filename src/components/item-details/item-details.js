import React, { Component } from 'react';

import { ItemView } from "./itemView";
import { Spinner } from "../spinner";
import { ErrorIndicator } from "../error-indicator";

import './item-details.css';

export class ItemDetails extends Component {
    state = {
        item: null,
        itemUrl: null,
        loading: false,
        error: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.itemId !== this.props.itemId  ||
            prevProps.getData !== this.props.getData ||
            prevProps.getImageUrl !== this.props.getImageUrl ) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;

        if(itemId) {
            this.setState({
                loading: true,
                error: false
            });
            getData(itemId)
                .then((item) => {
                    this.setState({
                        item,
                        itemUrl: getImageUrl(item),
                        loading: false,
                        error: false
                    });
                })
                .catch(() => this.setState({
                    error: true,
                    loading: false
                }));
        }
    }

    render() {
        const { item, loading, error, itemUrl } = this.state;

        const itemView = (
            item && (
                <ItemView itemUrl={ itemUrl } item={ item }>
                    { React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, { item });
                    })}
                </ItemView>)
        );

        const isPerson = this.props.itemId ? itemView : <span>Selected a person from list</span>;
        const isLoading = loading ? <Spinner /> : isPerson;
        const content = error ? <ErrorIndicator /> : isLoading;

        return (
            <div className="person-details card">
                { content }
            </div>
        )
    }
}