// we have using es6 way of importing here
import * as ActionTypes from './actiontypes';

// addcomment is the function that create an action object
// it returns the js object with type as specify and everything other in payload
// it returns it to the reducer func
// parameters receive is mapped into four properties
export const addComment = (dishId, rating, author, comment) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: {
		dishId: dishId,
		rating: rating,
		author: author,
		comment: comment
	}
});


