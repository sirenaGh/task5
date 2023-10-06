import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import coursesReducer from '../reducer/index';

const rootReducer = combineReducers({
  courses: coursesReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));


