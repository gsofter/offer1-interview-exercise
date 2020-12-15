import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import IconButton from '@material-ui/core/IconButton'

export const TwitterButton = ({ ...props }) => {
  return (
    <IconButton aria-label="twitter" {...props}>
      <TwitterIcon fontSize="large" />
    </IconButton>
  )
}
