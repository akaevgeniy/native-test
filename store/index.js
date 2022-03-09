import { applyMiddleware, combineReducers, createStore } from 'redux';
import infoReducer from './infoReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  infoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
