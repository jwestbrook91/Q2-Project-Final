import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
// import newsList from './redux/reducers/rootReducer';

const loggerMiddleware = createLogger();

const store = createStore(() => {}, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;
