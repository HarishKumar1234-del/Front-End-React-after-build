import  { DISHES } from '../shared/dishes';
import  { COMMENTS } from '../shared/comments';
import  { LEADERS } from '../shared/leader';
import  { PROMOTIONS } from '../shared/promotions';


export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};


// this will our reducer function, it will receive current state and action,
// which is pure function
// i cannot modify the state in the reduce , i do the immutable change & 
// return the updated version of state from the reducer
// initialState contain four properties dishes,commets,promotions,leaders
// es6 way of defining a function where you set the default value of paramter
// when the store first time call reduce ,state is underfined so as to avoid that
// we set the default value of stae to initalstate
export const Reducer = (state = initialState,action) => {
	return state;
};