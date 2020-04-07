import React from 'react';
import LandingPage from './landingpage';
import {Switch, Route} from 'react-router-dom';

import Project from './project';
import Resume from './resume';

const Main =()=>(
    <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/project" component={Project}/>
    <Route exact path="/resume" component={Resume}/>
    </Switch>

)
export default Main;