//knows how to create and manage React components
import React, {Component} from 'react';

//import React-Redux library - glue between react and redux
import {connect} from 'react-redux';

export default class BookDetail extends Component{
	render(){
		if(!this.props.book){
			return <div>Select a book to get started</div>;
		}
		return(
			<div>
			<h3>{this.props.book.title}</h3>
			<h1>Pages: {this.props.book.pages}</h1>
			</div>
		);
	}
}

//takes the application's state as the argument
function mapStateToProps(state){
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);
