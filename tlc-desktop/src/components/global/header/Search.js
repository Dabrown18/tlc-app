import React, { Component } from 'react';

export default class Search extends Component {
	render() {
		return (
			<form className="form-inline float-right hidden-sm-down">
		    <input className="form-control" type="text" data-action="grow" placeholder="Search" />
		  </form>
		);
	}
}