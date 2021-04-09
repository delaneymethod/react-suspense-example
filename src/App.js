import React, { Component, Suspense } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Welcome from './containers/Welcome';

const User = React.lazy(() => import('./containers/User').then(component => component));
const Posts = React.lazy(() => import('./containers/Posts').then(component => component));

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<nav>
						<NavLink to="/user">User Page</NavLink> |&nbsp;
						<NavLink to="/posts">Posts Page</NavLink>
					</nav>
					<Route path="/" component={Welcome} exact/>
					<Route path="/user" render={() => (
						<Suspense fallback={<div>Loading...</div>}>
							<User/>
						</Suspense>
					)}/>
					<Route path="/posts" render={() => (
						<Suspense fallback={<div>Loading...</div>}>
							<Posts/>
						</Suspense>
					)}/>
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
