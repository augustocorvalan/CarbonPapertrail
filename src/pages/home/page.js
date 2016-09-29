import React from "react";
import { connect } from 'react-redux';
import styles from "./style.css";
import classnames from 'classnames';

//components
import LoadingScreen from 'common/components/LoadingScreen';
import FlexRow from 'common/components/FlexRow';
import Episode from 'common/components/Episode';

//actions
import { loadInitialEpisodes } from '../../modules/episodes';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true, active: 0 }; 
	}

	componentDidMount() {
		window.onload = () => this.setState({ isLoading: false });
	}

	handleClick(i, e) {
		e.preventDefault();
		this.setState({ active: i });
	}

	getEpisodes() {
		const episodes = this.props.episodes.map((episode, i) => (
			<Episode 
				episode={episode} 
				key={i} 
				onClick={this.handleClick.bind(this, i)}
				isActive={this.state.active === i} />
		));

		return (
			<FlexRow className={classnames('episodes', { preload: this.state.isLoading})}>
				{episodes}
			</FlexRow>
		);
	}

	getLoadingScreen() {
		return this.state.isLoading && <LoadingScreen />
	}

	render() {
		return (
  			<FlexRow className='container'>
  				{::this.getLoadingScreen()}
  				{::this.getEpisodes()}
			</FlexRow>
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
