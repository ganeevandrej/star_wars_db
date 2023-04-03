import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const withRouter = (Wrapped) => {
    return ( props ) => {
        const mapHooksToProps = {
            urlParams: useParams(),
            navigate: useNavigate()
        }

        return <Wrapped {...props} {...mapHooksToProps} />
    }
}