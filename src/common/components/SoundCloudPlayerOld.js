/*
SoundCloudPlayer & SoundCloudProgress and their associated stylesheets were taken from the 
very excellent tutorial over at scotch.io 
(https://scotch.io/tutorials/build-a-music-player-with-react-electron-ii-making-the-ui)
*/


import React from 'react';
import styles from 'common/styles/SoundCloudPlayer.css';

//COMPONENTS
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const { SoundCloudLogoSVG, PlayIconSVG } = Icons;

//UPDATE THIS
const clientId = 'e8b6f84fbcad14c301ca1355cae1dea2';
const resolveUrl = 'https://soundcloud.com/stepan-i-meduza-official/dolgo-obyasnyat';

class PlayPause extends React.Component {
    render() {
        return (
            <PlayButton className="flex-none h4 mr2 button button-transparent button-grow rounded" {...this.props} />
        );
    }
}

class SoundCloudPlayer extends React.Component {
    render() {
        return (
            <SoundPlayerContainer resolveUrl={resolveUrl} clientId={clientId}>
                <PlayPause />
            </SoundPlayerContainer>
        );
    }
}

export default SoundCloudPlayer;