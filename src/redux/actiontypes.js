export const ADD_COMMENT = 'ADD_COMMENT';
export const DISHES_LOADING = 'DISHES_LOADING';
export const DISHES_FAILED = 'DISHES_FAILED';
export const ADD_DISHES = 'ADD_DISHES';

// when you define multiple actions as string and input these actions
// into reducer functions and use them to do the matchig in switch statements there
// dishes_loading means dishes are currently being fetched from the server
// dishes_failed means that you failed to fetch the dishes information from a server
// add dishes means that you want to add the dishes into your store