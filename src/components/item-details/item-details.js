import React from 'react';
import { withMountUpdate } from "../hok-helper/with-mount-update";

import { ItemView } from "./itemView";
import { Spinner } from "../spinner";
import { ErrorIndicator } from "../error-indicator";

import './item-details.css';

const ItemDetails = ({ item, loading, error, itemUrl, children, itemId }) => {
    const itemView = (
        item && (
            <ItemView itemUrl={ itemUrl } item={ item }>
                { React.Children.map(children, (child) => {
                    return React.cloneElement(child, { item });
                })}
            </ItemView>)
    );

    const isPerson = itemId ? itemView : <span>Selected a person from list</span>;
    const isLoading = loading ? <Spinner /> : isPerson;
    const content = error ? <ErrorIndicator /> : isLoading;

    return (
        <div className="person-details card">
            { content }
        </div>
    );
}

export default withMountUpdate(ItemDetails);