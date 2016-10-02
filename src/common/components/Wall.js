import React from 'react';
import styles from 'common/styles/wall.css';

//components
import ReactList from 'react-list';
import WallImage from 'common/components/WallImage';

class Wall extends React.Component {
	renderWallImage(index, key) {
		return <WallImage height={300} width={300} key={key} />
	}

	renderGridLine(index, key) {
		return (
			<ReactList
				axis='x'
				key={key}
				length={10000}
				itemRenderer={
					(column, key) => this.renderWallImage(column, key)
				}
				useTranslate3d={true}
				useStaticSize={true}
				type='uniform'/>
		);
	}

	render() {
		return (
		    <div className="wall">
				<ReactList
					useTranslate3d={true}
					useStaticSize={true}
					itemRenderer={::this.renderGridLine}
					length={1000}
					type='uniform' />
		    </div>
		);
	}
}


export default Wall;