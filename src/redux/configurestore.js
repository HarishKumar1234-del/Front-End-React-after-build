// create store allows me to create redux store
import { createStore } from 'redux';
// these two are redquire for configure store
import { Reducer, initialState } from './reducer'


export const ConfigureStore = () => {
	const store = createStore(
		Reducer,
		initialState
	);

	return store;
}