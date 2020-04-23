import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import {firebaseReducer } from 'react-redux-firebase'
import {firestoreReducer } from 'redux-firestore' // <- needed if using firestore


const rootReducer=combineReducers({
    auth:authReducer,
    project:projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer 
    
});
export default rootReducer;
// Add firebase to reducers
// const rootReducer = combineReducers({
//   firebase: firebaseReducer,
// firestore: firestoreReducer // <- needed if using firestore
// })