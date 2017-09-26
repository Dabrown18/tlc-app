import React, { Component } from 'react';

export default class Search extends Component {
	render() {
		return (
			<form {...this.props}>
		    <input className="form-control" type="text" data-action="grow" placeholder="Search" />
		  </form>
		);
	}
}