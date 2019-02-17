import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Abonents from "./modules/abonents";
import History from "./modules/history";

export default () =>
    <Router>
        <>
            <Route exact path='/' component={Abonents}/>
            <Route path='/history/:id' component={History}/>
        </>
    </Router>
