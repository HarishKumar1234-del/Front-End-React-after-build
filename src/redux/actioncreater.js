// we have using es6 way of importing here
import * as ActionTypes from './actiontypes';
import  { DISHES } from '../shared/dishes';
import { baseUrl }  from '../shared/baseurl';

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


// (dispatch) is the function returned by fetchDishes and its defining is define below
// we have provided a time delay of 2s or 2000ms
// this thunk done two dispatch first is dishesloading and
// second with 2s delayed addDishes(DISHES) which is going to push the
// dishes into the state of our store there
export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading(true));

	return fetch(baseUrl + 'dishes')
		.then(response => {
			if (response.ok) {
				return response;
			}
			else{
				var error = new Error('Error ' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		},
		error => {
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(dishes => dispatch(addDishes(dishes)))
		.catch(error => dispatch(dishesFailed(error.message)));
}
// status will contain the code
// statusText will contain the error message from the server
// error is construct as error object here
// first part is where you receive something from the server which is error 
// second part is where you do not receive anything and thus create your own error object


// now my fetchedishes is setup to go and fetch the dishes and then, once the dishes are
// obtained then it'll push the dishes into the redux store here by dispatching that to the
// dishes  




// dishesloading return an action of 
export const dishesLoading = () => ({
	type: ActionTypes.DISHES_LOADING
});

// errormessage-errmess is going to be a string
export const dishesFailed = (errmess) => ({
	type: ActionTypes.DISHES_FAILED,
	payload: errmess
})

export const addDishes = (dishes) => ({
	type: ActionTypes.ADD_DISHES,
	payload: dishes
});


// four different action creater function 
// three of them are returning an action object dishesLoading,
// dishesFailed, addDishes and the fourth is a thunk fetchDishes
// that is returning a function that is call or dispatch several actions


// COMMENTS
export const fetchComments = () => (dispatch) => {

	return fetch(baseUrl + 'comments')
		.then(response => {
			if (response.ok) {
				return response;
			}
			else{
				var error = new Error('Error ' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		},
		error => {
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(comments => dispatch(addComments(comments)))
		.catch(error => dispatch(commentsFailed(error.message)));
}


export const commentsFailed = (errmess) => ({
	type: ActionTypes.COMMENTS_FAILED,
	payload: errmess
})

export const addComments = (comments) => ({
	type: ActionTypes.ADD_COMMENTS,
	payload: comments
});



// PROMOS

export const fetchPromos = () => (dispatch) => {
	dispatch(promosLoading(true));

	return fetch(baseUrl + 'promotions')
		.then(response => {
			if (response.ok) {
				return response;
			}
			else{
				var error = new Error('Error ' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		},
		error => {
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(promos => dispatch(addPromos(promos)))
		.catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
	type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
	type: ActionTypes.PROMOS_FAILED,
	payload: errmess
})

export const addPromos = (promos) => ({
	type: ActionTypes.ADD_PROMOS,
	payload: promos
});








