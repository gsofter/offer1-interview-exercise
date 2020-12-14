import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  imageContainer: {
    '& img': {
      width: '100%',
    },
  },
}))

export default function BuildingImage(props) {
  const classes = useStyles()
  const { image } = props

  return (
    <Paper className={classes.imageContainer}>
      <img src={image} alt="asdf" />
    </Paper>
  )
}
