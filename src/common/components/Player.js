/*
Player & Progress and their associated stylesheets were taken from the 
very excellent tutorial over at scotch.io 
(https://scotch.io/tutorials/build-a-music-player-with-react-electron-ii-making-the-ui)
*/

import React from 'react';
import classnames from 'classnames';
import styles from 'common/styles/player.css';

class Player extends React.Component {
    render(){
        const playPauseClass = classnames({
            'fa fa-play': this.props.playStatus == 'PLAYING' ? false : true,
            'fa fa-pause': this.props.playStatus == 'PLAYING' ? true : false
        });

        return(
        <div className="player">
            {/*Rewind Button*/}
            <div className="player-backward">
                <button onClick={this.props.backward}><i className="fa fa-backward"></i></button>
            </div>
            <div className="player-play">
                {/*Play/Pause Button*/}
                <button onClick={this.props.togglePlay}><i className={playPauseClass}></i></button>
            </div>
            {/*Forward Button*/}
            <div className="player-forward">
                <button onClick={this.props.forward}><i className="fa fa-forward"></i></button>
            </div>
        </div>
        )
    }
}

export default Player;
