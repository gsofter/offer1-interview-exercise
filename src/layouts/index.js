import React, { Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import PublicLayout from './Public'
import AuthLayout from './Auth'
import MainLayout from './Main'

const Layouts = {
  public: PublicLayout,
  auth: AuthLayout,
  main: MainLayout,
}
const mapStateToProps = ({ ...state }) => ({ ...state })
const Layout = ({ user, children, location }) => {
  const { pathname, search } = location

  const getLayout = () => {
    // TODO: check authentication
    return 'main'
  }
  const Container = Layouts[getLayout()]
  const BootstrappedLayout = () => {
    return <Container>{children}</Container>
  }
  return (
    <Fragment>
      <Helmet titleTemplate="Offer Real Estate" />
      {BootstrappedLayout()}
    </Fragment>
  )
}

export default withRouter(connect(mapStateToProps)(Layout))
