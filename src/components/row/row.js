import React from "react";

import "./row.css";

export const Row = ({ left, right }) => {
    return (
        <div className="row app mb2">
            <div className="col-md-6">
                { left }
            </div>
            <div className="col-md-6">
                { right }
            </div>
        </div>
    );
}