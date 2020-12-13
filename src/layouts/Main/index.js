import React, { Children } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../../components/Header'

const mapStateToProps = ({ state }) => ({})
const MainLayout = ({ children, ...props }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="body">This is body part {children} </div>
      <div className="footer"> This is footer part </div>
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(MainLayout))
