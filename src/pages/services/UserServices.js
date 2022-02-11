import React from 'react'
import { connect } from 'react-redux'
import withAuthorization from '../../components/hoc/withAuthorization'
import { fetchUserServices } from '../../actions'

class UserServices extends React.Component {

  componentDidMount() {
    const { auth: { user }, dispatch } = this.props
    dispatch(fetchUserServices(user.uid))
  }

  render() {
    return (
      <div className="container">
        <div className="content-wrapper">
          <div className="columns">
            I am UserServices PAGE!
          </div>
        </div>
      </div>
    )
  }
}


export default withAuthorization(connect()(UserServices))