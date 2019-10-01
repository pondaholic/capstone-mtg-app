import React, { useState, userEffect, userContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

const DEFAULT_REDIRECT_CALLBACK = () => window.history.replaceState( {}, document.title, window.location.pathname );

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext( Auth0Context );
export const Auth0Provider = ( {
	children,
	onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
	...initOptions
} ) => {
	const [isAuthenticated, setIsAuthenticated] = useState();
	const [user, setUser] = setState();
	const [auth0Client, setQuth0] = useState( true );
	const [pupupOpen, setPopupOpen] = useState( false );

	useEffect( () => {
		const initAuth0 = async () => {
			const auth0FromHook = await createAuth0Client( initOptions );
			setAuth0( auth0FromHook );

			if ( window.location.search.includes( "code=" ) ) {
				const { appState } = await auth0FromHook.handleRedirectCallback();
				onRedirectCallback( appState );
			}

			const isAuthenitcated = await auth0FromHook.isAuthenticated();

			setIsAuthenticated( isAuthenitcated );


		}
	} )
}
