import React from 'react';
import styles from 'common/styles/wall.css';

//third-party library
import Wall from 'libraries/Wall';

class Wall extends React.Component {
	componentDidMount() {
		// Define The Wall
		var maxLength    = 100; // Max Number images
		var counterFluid = 1;
		var wallFluid = new Wall("wall", {
						"preload": true,
		                "draggable":true,
		                "inertia":true,
		                "width":300,
		                "height":300,
		                "rangex":[-100,100],
		                "rangey":[-100,100],
		                callOnUpdate: function(items){
		                    items.each(function(e, i){
		                        var a = new Element("img[src='http://lorempixel.com/300/300/cats']");
		                            a.inject(e.node).fade("hide").fade("in");
		                        counterFluid++;
		                        // Reset counter
		                        if( counterFluid > maxLength ) counterFluid = 1;
		                    })
		                }
		            });
		// Init Fluid Wall
		wallFluid.initWall();
	}

	render() {
		return (
		    <div id="wall"></div>
		);
	}
}


export default Wall;