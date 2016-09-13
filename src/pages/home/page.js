import React from "react";
import { connect } from 'react-redux';
import styles from "./style.css";

class HomePage extends React.Component {
	render() {
		return (
			<h1>Welcome to Redux Shell</h1>
		);
	}
};

function mapStateToProps(state) {
	return {
		//map state to props here
	}
}

export default connect(mapStateToProps)(HomePage);
