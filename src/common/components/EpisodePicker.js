import React from 'react';

//components
import Episode from './Episode';
import FlexRow from './FlexRow';

class EpisodePicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: 0 };
	}

	handleClick(i, e) {
		e.preventDefault();
		this.setState({ active: i });
	}

	getEpisodes() {
		return this.props.episodes.map((episode, i) => (
			<Episode 
				episode={episode} 
				key={i} 
				onClick={this.handleClick.bind(this, i)}
				isActive={this.state.active === i} />
		));
	}

	render() {
		return (
			<FlexRow>
				{::this.getEpisodes()}
			</FlexRow>
		);

	}
};

EpisodePicker.defaultProps = { episodes: [] };

export default EpisodePicker;