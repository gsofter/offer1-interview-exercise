import React from 'react'
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
}))

const Header = ({ ...props }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <Button href="/" className={classes.homeLink}>
            <ApartmentIcon className={classes.icon} />{' '}
          </Button>
          <Typography variant="h6" color="inherit" noWrap className={classes.homeLink}>
            {/* TODO: should display Name from contants list */}
            Offer1 Real Estate
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header
