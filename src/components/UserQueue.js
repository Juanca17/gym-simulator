import React from 'react';
import boy from '../assets/boy.png';
import girl from '../assets/girl.png';
import { Popover } from 'antd';
import { connect } from 'react-redux';
import { updateCurrentTime } from '../redux';
import JSONPretty from 'react-json-pretty'

class UserQueue extends React.Component {
  state = {
    play: false,
    speed: 2000
  }
  userList = {}

  render() {
    const { users } = this.props
    this.userList = users.map((user, index) =>
      <span key={index}>
        <Popover placement="right" content={<JSONPretty id="json-pretty" data={user}/>} title={user.name}>
          <img className="user-icon" src={user.gender === 'male' ? boy : girl} alt={user.gender}/>
        </Popover>
      </span>
    )
    return (
      <div className="user-queue">
        <center><span>Usuarios Activos</span></center>
        {this.userList}
        {/*<Pagination
          className="user-queue-pagination"
          size='small'
          total={users.length}
          showTotal={(total, range) => `${range[0]}-${range[1]} de ${total} usuarios`}
          pageSize={20}
          defaultCurrent={1}
        />*/}
        <br/>
        {`Total: ${users.length} usuarios`}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  current: state.scene.current,
  users: state.scene.users
});
const mapDispatchToProps = { updateCurrentTime };
export default connect(mapStateToProps, mapDispatchToProps)(UserQueue);
