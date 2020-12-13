import React, { Children } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = ({ state }) => ({})
const MainLayout = ({ children, ...props }) => {
  return (
    <div className="main-layout">
      <div className="header"> This is header part </div>
      <div className="body">This is body part {children} </div>
      <div className="footer"> This is footer part </div>
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(MainLayout))
