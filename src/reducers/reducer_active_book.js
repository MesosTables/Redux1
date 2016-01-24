//State argument is not application state,
//only the state this reducer is controlling.
//default the state to be null
export default function(state = null, action){
	switch(action.type){
		case 'BOOK_SELECTED':
			//which will be the book
			return action.payload;
		default:
			return state;
	}
}
