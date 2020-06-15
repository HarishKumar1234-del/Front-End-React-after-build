import  { COMMENTS } from '../shared/comments';
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
export const Comments = (state = COMMENTS, action) => {
	switch(action.type) {
		case ActionTypes.ADD_COMMENT:
			var comment = action.payload;
			// state is an array of comments and its length is served as id
			comment.id = state.length;
			comment.date = new Date().toISOString();
			// we do not directly return the state we push comment into state
			// then new object state is create and return
			console.log(" Comment: ", comment)
			return state.concat(comment);
		default:
			return state;
	}
}

// now the reducer part of the function which manages the comments part of state updated






