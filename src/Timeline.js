import React from 'react';
import { Slider } from 'antd';

import { connect } from 'react-redux';
import { updateCurrentTime } from './redux';

const marks = {
  0: '6:00 AM',
  360: '12:00 PM',
  720: '6:00 PM',
  1080: '9:00 PM',
};

class Timeline extends React.Component {
  componentDidUpdate() {
    const { play, speed, current } = this.props
    if (play && current < 1080) {
      setTimeout(() => {
        this.props.updateCurrentTime(current + 1)
      }, speed);
    }
  }

  handleOnChange = (value) => {
    const { play } = this.props
    if (!play) {
      this.props.updateCurrentTime(value)
    }
  }

  render() {
    const { current } = this.props
    return (
      <Slider marks={marks} value={current} max={1080} tooltipVisible={false} onChange={this.handleOnChange} />
    )
  }
}

const mapStateToProps = state => ({ current: state.scene.current });
const mapDispatchToProps = { updateCurrentTime };
export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
