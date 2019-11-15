import React from 'react';
import { Slider } from 'antd';

const marks = {
  0: '6:00',
  360: '12:00',
  720: '18:00',
  1080: '21:00',
};

class Timeline extends React.Component {
  state = {
    current: 0
  }

  componentDidUpdate() {
    const { play, speed } = this.props
    const { current } = this.state
    console.log(current);
    if (play && current < 1080) {
      setTimeout(() => this.setState({ current: current + 1 }), speed);
    }
  }


  render() {
    const { current } = this.state
    return (
      <Slider marks={marks} value={current} max={1080} tooltipVisible={false} />
    )
  }
}

export default Timeline;
