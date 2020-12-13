import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ApartmentIcon from '@material-ui/icons/Apartment'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}))

const Header = ({ ...props }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ApartmentIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            {/* TODO: should display Name from contants list */}
            Offer1 Real Estate
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header
