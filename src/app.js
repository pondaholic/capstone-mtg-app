import React from 'react';
import Search from './main/search';
import Navbar from './main/navbar';

import './component-css/app.css';
export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="homepage-image">
					<Navbar />
					<Search />
				</div>
			</div>
		);
	}
}
