import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ApartmentIcon from '@material-ui/icons/Apartment'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appBar: {
    '& a': {
      textDecoration: 'none',
    },
  },
  homeLink: {
    color: 'white',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}))

const Header = ({ ...props }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <ApartmentIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            {/* TODO: should display Name from contants list */}
            <Button href="/" className={classes.homeLink}>
              {' '}
              Offer1 Real Estate{' '}
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header
