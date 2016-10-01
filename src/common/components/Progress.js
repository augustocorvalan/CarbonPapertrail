import React from 'react';
import styles from 'common/styles/progress.css';

class Progress extends React.Component {
  render() {
    return(
        <div className="progress">
            {/* Elapsed time */}
            <span className="progress-time-elapsed">{this.props.elapsed}</span>
            {/* Progress Bar */}
            <progress
               value={this.props.position}
               max="1"></progress>
            {/* Total time */}
            <span className="progress-time-total">{this.props.total}</span>
        </div>
    )
    }

}

export default Progress;