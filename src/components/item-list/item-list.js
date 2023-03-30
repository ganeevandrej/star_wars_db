import React from 'react';

import './item-list.css';

export const ItemList = ({ data, onClickItem, children: renderItem }) => {
    const renderItems = (arr) => {
        return arr.map((item) => {
            const { id }  = item;
            const label = renderItem(item);
            return (
                <li
                    key={ id }
                    onClick={() => onClickItem(id) }
                    className="list-group-item">
                    { label }
                </li>
            );
        });
    }

    return (
        <ul className="item-list list-group">
            { renderItems(data) }
        </ul>
    );
}