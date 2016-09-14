import React from "react";
import { connect } from 'react-redux';
import styles from "./style.css";

//components
import EpisodePicker from '../../common/components/EpisodePicker';

//actions
import { loadInitialEpisodes } from '../../modules/episodes';

class HomePage extends React.Component {
	render() {
		return (
			<EpisodePicker episodes={this.props.episodes} />
		);
	}
};

function mapStateToProps(state) {
	return {
		episodes: state.episodes
	}
}

export default connect(
	mapStateToProps,
	{ loadInitialEpisodes }
)(HomePage);
