import React from 'react';
import { Slider } from 'antd';

import { connect } from 'react-redux';
import { updateCurrentTime } from './redux';

const marks = {
  0: '6:00',
  360: '12:00',
  720: '18:00',
  1080: '21:00',
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


  render() {
    const { current } = this.props
    return (
      <Slider marks={marks} value={current} max={1080} tooltipVisible={false} />
    )
  }
}

const mapStateToProps = state => ({ current: state.scene.current });
const mapDispatchToProps = { updateCurrentTime };

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
