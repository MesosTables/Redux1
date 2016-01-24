//knows how to create and manage React components
import React, {Component} from 'react';
//import React-Redux library - glue between react and redux
import {connect} from 'react-redux';

import {selectBook} from '../actions/index';

import{bindActionCreators} from 'redux';

//pass in the returned videos to the component as the video variable
// video is = saying "const video = <passReference>.video;"
class BookList extends Component {
//maps over an array of books, for each book it creates an li
//with key of title and value of title
	renderList(){
		return this.props.books.map((book) =>{
			return(
				<li 
					onClick = {() => {this.props.selectBook(book)}} 
					key={book.title} 
					className="list-group-item"> {book.title} 
				</li>
			);
		});
	}
	render(){
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

//take the application's state as the argument
//whatever is returned will be the this.props of BookList
function mapStateToProps(state){
	return {
		books: state.books
	};
}

//anything return from this function will return as props on the BookList container
function matchDispatchToProps(dispatch){
	//key of selectBook: with a value of selectBook we passed in
	//selectBook is set up to flow through the dispatch action to the reducers
	return bindActionCreators({selectBook: selectBook}, dispatch)
}

//will take a function and a component and produces the container
//container is aware of the state that is contained by redux
//dispatch method is now known to BookList
export default connect(mapStateToProps, matchDispatchToProps)(BookList);
