import React from "react";
import { connect } from 'react-redux';

class PlayerPage extends React.Component {
	render() {
		return (
			<div>
				hellow
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
	}
}

export default connect(
	mapStateToProps,
	{}
)(PlayerPage);
