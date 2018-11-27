import {
	START_SEARCH,
	FETCH_CARDS_SUCCESS,
	FETCH_CARDS_ERROR
} from '../actions/search-mtg';

const initialState = {
	cardList: [],
	loading: false,
	error: null
};

export default function mtgReducer(state = initialState, action) {
	if (action.type === START_SEARCH) {
		return Object.assign({}, state, {
			error: false,
			loading: true
		});
	}
	if (action.type === FETCH_CARDS_SUCCESS) {
		// console.log('passing cards', action.cards);
		return Object.assign({}, state, {
			cardList: action.cards,
			loading: false
		});
	}
	if (action.type === FETCH_CARDS_ERROR) {
		// console.log(action.error);
		return Object.assign({}, state, {
			error: action.error,
			loading: false,
			cardList: []
		});
	}
	return state;
}
