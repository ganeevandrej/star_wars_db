import React from "react";

export const ItemView = ({ name, itemUrl, children }) => {
    return (
        <>
            <img className="person-image"
                 src={itemUrl} alt={ name } />

            <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    { children }
                </ul>
            </div>
        </>
    );
}