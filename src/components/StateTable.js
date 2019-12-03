import React from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import ActivityTag from './ActivityTag'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: '7%'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '15%'
  },
  {
    title: 'Activities',
    dataIndex: 'activities',
    key: 'activities',
    width: '25%',
    render: activities => (
      <span>
        {
          activities.map((activity, index) => {
            return <ActivityTag key={index} activity={activity} />
          })
        }
      </span>
    ),
    filters: [
      { text: 'Cardio', value: 'cardio' },
    ],
    filterMultiple: false,
      //onFilter: (value, record) => record.type.toString().includes(value)
  },
  {
    title: 'Capacity',
    dataIndex: 'capacity',
    key: 'capacity',
    width: '10%'
  },
  {
    title: 'Active users',
    dataIndex: 'users',
    key: 'users',
    width: '43%'
  }
]

class StateTable extends React.Component {
  render () {
    const { stateList } = this.props
    return (
      <Table className='state-table' columns={columns} dataSource={stateList} rowKey='id' />
    )
  }
}

const mapStateToProps = state => ({ stateList: state.scene.stateList });
export default connect(mapStateToProps)(StateTable);
