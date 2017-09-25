import React, { Component } from 'react';
import BirthdaySelector from './BirthdaySelector';

export default class Form extends Component {
	render() {
		return (
			<form {...this.props}>
				<BirthdaySelector />
		    <div className="mb-5">
		      <button className="btn btn-primary">Next</button>
		    </div>
		    
		  </form>
		);
	}
}
