import React from 'react';
import { Button } from 'antd';
import Icon from 'react-icons-kit';
import {play} from 'react-icons-kit/fa/play'
import {pause} from 'react-icons-kit/fa/pause'
import {stop} from 'react-icons-kit/fa/stop'
import {forward} from 'react-icons-kit/fa/forward'
import {fastForward} from 'react-icons-kit/fa/fastForward'
import {stepForward} from 'react-icons-kit/fa/stepForward'
const ButtonGroup = Button.Group;


const SceneControls = (props) => {
  const { onPlay, onPause, onStop, onForward, onFastForward, onStepForward } = props
  return (
    <ButtonGroup>
      <Button onClick={onPlay}><Icon icon={play} /></Button>
      <Button onClick={onPause}><Icon icon={pause} /></Button>
      <Button onClick={onStop}><Icon icon={stop} /></Button>
      <Button onClick={onForward}><Icon icon={forward} /></Button>
      <Button onClick={onFastForward}><Icon icon={fastForward} /></Button>
      <Button onClick={onStepForward}><Icon icon={stepForward} /></Button>
    </ButtonGroup>
  );
}

export default SceneControls;
