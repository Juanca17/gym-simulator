import React from 'react';
import Timeline from './Timeline'
import SceneControls from './SceneControls'
import DayLabel from './DayLabel'
import UserQueue from './UserQueue'

import { connect } from 'react-redux';
import { updateCurrentTime } from '../redux';

class Scene extends React.Component {
  state = {
    play: false,
    speed: 2000
  }
  handlePlay = () => {
    this.setState({ play: true, speed: 2000 })
  }
  handlePause = () => {
    this.setState({ play: false })
  }
  handleStop = () => {
    this.setState({ play: false, speed: 2000 })
    this.props.updateCurrentTime(0)
  }
  handleForward = () => {
    this.setState({ play: true, speed: 1000 })
  }
  handleFastForward = () => {
    this.setState({ play: true, speed: 600 })
  }
  handleStepForward = () => {
    this.setState({ play: false })
    const { current } = this.props
    this.props.updateCurrentTime(current + 1)
  }

  render() {
    const { play, speed } = this.state
    return (
      <div>
        <DayLabel day={1} />
        <Timeline ref={ref => this.timeline = ref} play={play} speed={speed} />
        <SceneControls
          onPlay={this.handlePlay}
          onPause={this.handlePause}
          onStop={this.handleStop}
          onForward={this.handleForward}
          onFastForward={this.handleFastForward}
          onStepForward={this.handleStepForward}
        />
        <UserQueue />
        <br/>
        test
        <br/>
        test
        <br/>
        test
        <br/>
        test
        <br/>
        test
        <br/>
        test
        <br/>
        test
        <br/>
        test
        
      </div>
    )
  }
}

const mapStateToProps = state => ({ current: state.scene.current });
const mapDispatchToProps = { updateCurrentTime };
export default connect(mapStateToProps, mapDispatchToProps)(Scene);
