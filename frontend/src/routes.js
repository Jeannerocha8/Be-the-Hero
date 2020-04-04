import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Logon from './pages/logon';
import Registrer from './pages/registrer';
import Profile from './pages/profile';
import NewIncident from './pages/newIncident';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/registrer" component={Registrer}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    );
}