import React from 'react';
import moment from 'moment'
import { connect } from 'react-redux';

const DayLabel = (props) => {
  const { day, current } = props
  const days = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday']
  let hour = moment("10:00:00", "H:mm:ss").add(current, 'minutes');
  let dayLabel = days[day]
  let hourLabel = hour.format('LT')
  return (
    <div className="day-label">
      <span className="day">{dayLabel}</span>
      <br/>
      <span className="hour">{hourLabel}</span>
    </div>
  )
}

const mapStateToProps = state => ({ current: state.scene.current });
export default connect(mapStateToProps)(DayLabel);
