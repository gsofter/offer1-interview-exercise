import React, { Children } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const mapStateToProps = ({ state }) => ({})
const MainLayout = ({ children, ...props }) => {
  return (
    <div className="main-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(MainLayout))
