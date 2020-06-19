import * as ActionTypes from './actiontypes';

// this will our reducer function, it will receive current state and action,
// which is pure function
// i cannot modify the state in the reduce , i do the immutable change & 
// return the updated version of state from the reducer
// initialState contain four properties dishes,commets,promotions,leaders
// es6 way of defining a function where you set the default value of paramter
// when the store first time call reduce ,state is underfined so as to avoid that
// we set the default value of stae to initalstate

// when you implement the reducer function you take state and action
// as two parameters
// if state is not defined you give the initial value of state 
// as dishes and retur them

// payload is js object which contais various parts of comment
export const Comments = (state = {
		errMess: null,
		comments: []
}, action) => {
	switch(action.type) {
		case ActionTypes.ADD_COMMENTS:
			return {...state, isLoading: false, errMess: null, comments: action.payload };

		case ActionTypes.COMMENTS_FAILED:
			return {...state, isLoading: false, errMess: action.payload, comments: []};

		case ActionTypes.ADD_COMMENT:
			var comment = action.payload;
			// state is an array of comments and its length is served as id
			// we do not directly return the state we push comment into state
			// then new object state is create and return
			return {...state, comments: state.comments.concat(comment)};

		default:
			return state;
	}
}

// now the reducer part of the function which manages the comments part of state updated






