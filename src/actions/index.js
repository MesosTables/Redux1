//an action creator
export function selectBook(book){
	//will return an action, an object with a type and sometimes
	// a payload
	return{
		type: 'BOOK_SELECTED',
		payload: book
	};
}
