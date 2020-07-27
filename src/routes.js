import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Body } from './components';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/two" component={() => <h1>Plant</h1>} />
            <Route exact path="/three" component={() => <h1>View</h1>} />
            <Route exact path="/four" component={() => <h1>Contacts</h1>} />
        </Switch>
    )
}

export default Routes;