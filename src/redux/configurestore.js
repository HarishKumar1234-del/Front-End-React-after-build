// create store allows me to create redux store
import { createStore, combineReducers, applyMiddleware } from 'redux';
// these two are redquire for configure store
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// so to compose global state we have to map these reducers into one of the four properties there
// both thunk and logger acts as a enchancer for our store
export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			dishes: Dishes,
			comments: Comments,
			promotions: Promotions,
			leaders: Leaders
		}),
		applyMiddleware(thunk, logger)
	);

	return store;
}