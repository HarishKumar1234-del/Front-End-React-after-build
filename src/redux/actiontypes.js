export const ADD_COMMENT = 'ADD_COMMENT';
export const DISHES_LOADING = 'DISHES_LOADING';
export const DISHES_FAILED = 'DISHES_FAILED';
export const ADD_DISHES = 'ADD_DISHES';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const COMMENTS_FAILED = 'COMMENTS_FAILED';
export const PROMOS_LOADING = 'PROMOS_LOADING';
export const ADD_PROMOS = 'ADD_PROMOS';
export const PROMOS_FAILED = 'PROMOS_FAILED';

// when you define multiple actions as string and input these actions
// into reducer functions and use them to do the matchig in switch statements there
// dishes_loading means dishes are currently being fetched from the server
// dishes_failed means that you failed to fetch the dishes information from a server
// add dishes means that you want to add the dishes into your store

// comments will be loaded behind the scenes when we render our application,
// we will first render home components by the time home component is rendered ,
// the components will also be fetched in so by the time we navigate to the dish details
// component the comments are already be fetched in so thats why we don't have separate
// comments loading part setup in our application 