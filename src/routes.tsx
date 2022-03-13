import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import Home from './views/Home/index.jsx';
import SignIn from './views/SignIn/index.jsx';
import Claims from './views/Claims/index.jsx';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="/login" element={<SignIn />} />
					<Route path="/reclamacao" element={<Claims />} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
