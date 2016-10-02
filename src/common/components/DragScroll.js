import React from 'react';
import classnames from 'classnames';
import reset from 'libraries/dragscroll';

class DragDrop extends React.Component {
	componentDidMount() {
		reset();
	}

	render() {
		const classes = classnames('dragscroll', this.props.className);

		return (
			<div {...this.props} className={classes}>
				{this.props.children}
			</div>
		);
	}
}

export default DragDrop;