import React from 'react';

import styles from '../styles/LoadingScreen.css';
import classnames from 'classnames';

const texts = ['Loading', 'Loading.', 'Loading..', 'Loading...'];
let intervalId;

class LoadingScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ticker: 0 }
	}

	updateTicker() {
		this.setState({ ticker: ++this.state.ticker })
	}

	componentDidMount() {
		intervalId = setInterval(::this.updateTicker, 1000);
	}

	componentWillUnmount() {
		clearInterval(intervalId);      
	}

	render() {
		const classes = classnames('loading-screen', { 'is-active': this.props.isActive})
		return (
			<div className={classes}>
				{texts[this.state.ticker % texts.length]}
			</div>
		);
	}
}

export default LoadingScreen; 