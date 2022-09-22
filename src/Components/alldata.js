import React from "react";
import {UserContext} from './context';

function AllData() {
    const ctx = React.useContext(UserContext);
    return(
            <h1>
                AllData <br/>
                {JSON.stringify(ctx.users)}
            </h1>
    );
}
export default AllData;