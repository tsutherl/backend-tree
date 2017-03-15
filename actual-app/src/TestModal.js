'use strict';

import React from 'react';


export default class TestModal extends React.Component {
	constructor (props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			reqBody : {},
			headers : {}
		}
		this.onChange = this.onChange.bind(this);
	}

	handleClick(route, verb) {
		this.props.testThisRoute(route, verb);
	}

	// to do: change handle click to incorporate reqBody / headers for put or post 
	// to do above, you will need to change the async action creator (in store ) to
	// pass headers to axios request 

	onChange(e) {
		switch(e.target.name){
			case "reqBodyKey":
				this.setState({reqBody: {[e.target.value] : null}});
				break;
			case "reqBodyValue":
				let key = document.getElementById("reqBodyKey").value;
				this.setState({reqBody: {[key] : e.target.value}});
				break;
		}
		console.log("in onChange, here is this.reqBody ", this.state.reqBody);
	}


	render() {
		const route = this.props.testRoute;
		const method = this.props.selectedRouteVerb;
		console.log("props in testModal ", this.props);
		console.log("method in testModal render ", method);
			return (
		<div className='modal'>
			<div className='info'>
				<h2>Info</h2>
				<p><b>Path: </b>{this.props.testRoute}</p>
				<p><b>Method: </b>{method}</p>
				{method === 'put' || method === 'post' ? 
					
					<form className = "form-inline">
						<h3>Headers</h3>
						<div className='ro-row'>
							<span>Key</span><span>Value</span>
						</div>
						<div className='ro-row form-group'>
							<input name="headersKey"></input>
							<input name="headersValue"></input>
						{/*  button here to add another set (key-value pair) for headers
							would have to capture their data separately */}
						</div>

						<h3>Request Body</h3>
						<div className='ro-row'>
							<span>Key</span><span>Value</span>
						</div>
						<div className='ro-row form-group'>
							<input name="reqBodyKey" id="reqBodyKey" onChange={this.onChange}></input>
							<input name="reqBodyValue" onChange={this.onChange}></input>

						{/* add option to have text field where user can enter JSON instead
						of entering key-value pairs in form?  
						in that case, we need to use json.stringify(?) or json.parse to 
						grab user data and  put on local state */}

						</div>
					</form> : null }
			</div>
			<button onClick={()=>this.handleClick(route, method)}>Test Route</button>
		</div>
	)
}
}


