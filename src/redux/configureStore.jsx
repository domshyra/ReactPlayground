import {applyMiddleware, compose, createStore} from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"
import rootReducer from "./reducers";

export default function configureStore(initialState) {
    
    // const composeEnhancers =
    //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant()))
    );
  }
  