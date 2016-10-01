import React from "react";
import { connect } from 'react-redux';
import style from 'pages/player/style.css';

// import ImageWall from 'common/components/ImageWall';
import AudioPlayer from 'common/components/AudioPlayer';

class PlayerPage extends React.Component {
	render() {
		return (
			<div>
				<AudioPlayer {...this.props.track} />
			</div>
		);
	}
};

function mapStateToProps(state, ownProps) {
	const index = ownProps.location.query.track || 0;
	return {
		track: state.tracks[index]
	}
}

export default connect(mapStateToProps)(PlayerPage);
