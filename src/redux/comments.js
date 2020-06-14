import  { COMMENTS } from '../shared/comments';

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
export const Comments = (state = COMMENTS, action) => {
	switch(action.type) {
		default:
			return state;
	}
}








