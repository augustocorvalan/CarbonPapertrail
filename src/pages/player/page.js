import React from "react";
import { connect } from 'react-redux';
import style from 'pages/player/style.css';

import Wall from 'libraries/wall';

class PlayerPage extends React.Component {
	componentDidMount() {
		// Define The Wall
		var maxLength    = 100; // Max Number images
		var counterFluid = 1;
		var wallFluid = new Wall("wall", {
		                "draggable":true,
		                "inertia":true,
		                "width":150,
		                "height":150,
		                "rangex":[-100,100],
		                "rangey":[-100,100],
		                callOnUpdate: function(items){
		                    items.each(function(e, i){
		                        var a = new Element("img[src='http://lorempixel.com/150/150/cats']");
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
			<div id="viewport">
			    <div id="wall"></div>
			</div>	
		);
	}
};

// function mapStateToProps(state) {
// 	return {
// 	}
// }

// export default connect(
// 	mapStateToProps,
// 	{}
// )(PlayerPage);

export default PlayerPage;
