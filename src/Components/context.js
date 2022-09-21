import { ReactRouterDOM } from 'react-router'
import React from 'react';

export const Route = ReactRouterDOM.Route;
export const Link = ReactRouterDOM.Link;
export const HashRouter = ReactRouterDOM.HashRouter;
export const UserContext = React.createContext(null);

function Card(props) {
    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    }
    return (
        <div className={classes()} style={{maxWidth: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id="createStatus">{props.status}</div>)}
            </div>
        </div>
    );
}

export default Card;
//add a context for <BankForm> to make a cleaner approach for all the forms for createaccount, login, balance, deposit, withdraw