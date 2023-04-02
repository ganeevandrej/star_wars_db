import React, { Component } from 'react';

import { Spinner } from "../spinner";
import { ErrorButton } from "../error-button";

import './item-details.css';

export class ItemDetails extends Component {
    state = {
        item: null,
        itemUrl: null,
        loading: false
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.itemId !== this.props.itemId  ||
            prevProps.getData !== this.props.getData ||
            prevProps.getImageUrl !== this.props.getImageUrl ) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { itemId, getData, getImageUrl } = this.props;

        if(!itemId) {
            return;
        } else {
            this.setState({ loading: true });
            getData(itemId)
                .then((item) => {
                    this.setState({
                        item,
                        itemUrl: getImageUrl(item),
                        loading: false,
                    });
                });
        }
    }

    render() {
        const { item, loading, itemUrl } = this.state;

        const itemView = (
            <ItemView itemUrl={itemUrl} item={item}>
                { React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, { item });
                })}
            </ItemView>
        );

        const notFinedPerson = <span>Selected a person from list</span>;
        const content = item ? itemView : notFinedPerson;
        const isLoading = loading ? <Spinner /> : content;

        return (
            <div className="person-details card">
                { isLoading }
            </div>
        )
    }
}

const ItemView = ({ name, itemUrl, children }) => {
    return (
        <>
            <img className="person-image"
                 src={itemUrl} alt={ name } />

            <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    { children }
                </ul>
                <ErrorButton />
            </div>
        </>
    );
}