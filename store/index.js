import { applyMiddleware, combineReducers, createStore } from 'redux';
import infoReducer from './infoReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';
import userReducer from './userReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  infoReducer,
  userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
