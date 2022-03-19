import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Claims from '../pages/Claims';
import Home from '../pages/Home';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/reclamacao" component={Claims} />
	</Switch>
);

export default Routes;
