
// import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// import AppReducer from './src/Reducers';
// //import pushReducer from './screens/push/reducers'

// const appReducer = combineReducers({
//     AppReducer,
// })

// // TODO: consolidate this
// let middleware = []
// middleware.push(thunk)

// export default () => {
//     let store = {}

//     const enhancers = compose(
//         applyMiddleware(...middleware)
//     )

//     store = createStore(
//         appReducer,
//         enhancers
//     )

//     return store
// }


import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import AppReducer from './src/Reducers'

let middleware = []
middleware.push(thunk)
const enhancers = compose(
    applyMiddleware(...middleware)
)
const store = createStore(enhancers, AppReducer);

export default store;