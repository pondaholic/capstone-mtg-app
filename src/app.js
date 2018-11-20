import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import CardSearch from './main/card-search';
import CardList from './response-component/mtg-cards';
import ThisDeck from './response-component/deck';

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Route path="/" component={() => <CardSearch />} />
				<main id="main-body">
					<Switch>
						<Route exact path="/search" component={() => <CardList />} />
						<Route
							exact
							path="/thisDeck"
							component={() => (
								<ThisDeck
									cardsInDeck={this.props.cardsInDeck}
									handleRemove={event => this.handleRemove(event)}
								/>
							)}
						/>
					</Switch>
				</main>
			</div>
		);
	}
}
