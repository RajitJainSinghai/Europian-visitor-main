import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home.jsx';
import Favourite from './containers/Favourite.jsx';
import Map from './containers/Map.jsx';
import Detail from './containers/Detail.jsx';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/favourite'} component={Favourite} />
                <Route exact path={'/map'} component={Map} />
                <Route exact path={'/detail'} component={Detail} />
            </Switch>
        </>
    );
};
export default Router;
