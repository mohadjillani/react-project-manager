import React from "react";
import { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import "firebase/functions"; // <- needed if using httpsCallable
import { createStore, compose, applyMiddleware } from "redux";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore"; // <- needed if using firestore
import App from "./App";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const fbConfig = {
  apiKey: "AIzaSyC3mVmh5beBRxC1NwZTWSVjN9EmGCYtg6Y",
  authDomain: "project-manager-in-reactjs.firebaseapp.com",
  databaseURL: "https://project-manager-in-reactjs.firebaseio.com",
  projectId: "project-manager-in-reactjs",
  storageBucket: "project-manager-in-reactjs.appspot.com",
  messagingSenderId: "427352758321",
  appId: "1:427352758321:web:218ce9483a84e5292e5d10",
  measurementId: "G-PX90GHV7G2",
};

//react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
firebase.functions(); // <- needed if using httpsCallable

// Add firebase to reducers
// const rootReducer = combineReducers({
//   firebase: firebaseReducer,
// firestore: firestoreReducer // <- needed if using firestore
// })

// Create store with reducers and initial state
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig, {
      useFirestoreForProfile: true,
      userProfile: "users",
    })
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

// Setup react-redux so that connect HOC can be used

render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
