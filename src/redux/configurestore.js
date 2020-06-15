// create store allows me to create redux store
import { createStore, combineReducers } from 'redux';
// these two are redquire for configure store
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

// so to compose global state we have to map these reducers into one of the four properties there
export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			dishes: Dishes,
			comments: Comments,
			promotions: Promotions,
			leaders: Leaders
		})
	);

	return store;
}