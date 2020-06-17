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
export const Dishes = (state = {
		isLoading: true,
		errMess: null,
		dishes: []
	}, action) => {
	switch(action.type) {
		case ActionTypes.ADD_DISHES:
			return {...state, isLoading: false, errMess: null, dishes: action.payload };

		case ActionTypes.DISHES_LOADING:
			return {...state, isLoading: true, errMess: null, dishes: []};

		case ActionTypes.DISHES_FAILED:
			return {...state, isLoading: false, errMess: action.payload, dishes: []};

		default:
			return state;
	}
}

// three different actions need to be interpreted by this reducer function here
// initially the isLoading property is true because the dishes array empty here
// so that means tha you'll need to load the dishes information from 
// somewhere before the details of the dishes become availabe within your state

// errmess is passed from dishes_failed otherwise if not passed or there
// is no error message it will be null, errmess is errormessage that has been
// returned to you from the server if server is fail to load


// idLoading to false at time when add_dishes is called
// isLoading to true at time when add_loading is called
// once you obtain the dishes you set isLoadint to false

// {...state, } we will make new object from the state and make some changes
// and return the new object

















