import React from 'react';
import Timeline from './Timeline'
import SceneControls from './SceneControls'

class Scene extends React.Component {
  state = {
    play: false,
    speed: 2000
  }
  handlePlay = () => {
    this.setState({ play: true })
  }
  handlePause = () => {
    this.setState({ play: false })
  }
  handleStop = () => {
    this.setState({ play: false, speed: 2000 })
    this.timeline.setState({ current: 0 })
  }
  handleForward = () => {
    this.setState({ play: true, speed: 1000 })
  }
  handleFastForward = () => {
    this.setState({ play: true, speed: 100 })
  }
  handleStepForward = () => {
    this.setState({ play: false })
    const { current } = this.timeline.state
    this.timeline.setState({ current: current + 1 })
  }
   render() {
    const { play, speed } = this.state
    return (
      <div>
        <Timeline ref={ref => this.timeline = ref} play={play} speed={speed} />
        <SceneControls
          onPlay={this.handlePlay}
          onPause={this.handlePause}
          onStop={this.handleStop}
          onForward={this.handleForward}
          onFastForward={this.handleFastForward}
          onStepForward={this.handleStepForward}
        />
      </div>
    )
  }
}

export default Scene;
