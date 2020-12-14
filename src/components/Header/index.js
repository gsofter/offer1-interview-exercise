import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import ApartmentIcon from '@material-ui/icons/Apartment'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import red from '@material-ui/core/colors/cyan'

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.primary.light,
    backgroundColor: theme.palette.background.paper,
    '& a': {
      textDecoration: 'none',
      ':hover': 'none',
    },
  },
  homeLink: {
    color: theme.palette.primary.dark,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  toolBar: {
    flexWrap: 'wrap',
  },

  title: {
    flexGrow: 1,
    color: theme.palette.primary.dark,
    fontWeight: 600,
  },
}))

const mapStateToProps = (state) => ({ ...state })
const Header = (props) => {
  const classes = useStyles()
  const { user, dispatch } = props
  const handleLogout = () => {
    dispatch({
      type: 'user/LOGOUT',
    })
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Button href="/" className={classes.homeLink}>
            <ApartmentIcon className={classes.icon} />{' '}
          </Button>
          <Typography variant="h5" color="inherit" noWrap className={classes.title}>
            {/* TODO: should display Name from contants list */}
            Offer1 Real Estate
          </Typography>
          {user.authorized ? (
            <Button
              href="#"
              color="primary"
              variant="outlined"
              className={classes.link}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            ''
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default withRouter(connect(mapStateToProps)(Header))
