import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//here we are combining all of our states and
//telling our application what our state was
const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;
