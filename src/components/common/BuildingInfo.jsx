import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  rootContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '1.5em',
  },
  sectionsContainer: {
    padding: theme.spacing(5),
  },
  commonInfoContainer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  infoPanel: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    '& .title': {
      marginBottom: '1em',
    },
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '0.6em',
    borderBottom: '1px solid rgba(0,0,0,.1)',
    '& .buildinfo_label': {
      color: 'rgba(0,0,0,.6)',
    },
    '& .buildinfo_info': {
      color: 'rgba(0,0,0,.8)',
    },
  },
}))

export const InfoRow = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.infoRow}>
      <Typography variant="body2" className="buildinfo_label">
        {data.label}
      </Typography>
      <Typography variant="body2" className="buildinfo_info">
        {data.info}
      </Typography>
    </div>
  )
}
export const BuildingInfo = ({ building }) => {
  const classes = useStyles()
  const addressInfos = [
    {
      label: 'Address',
      info: building.property.address.addressLine1 | building.property.address.addressLine,
    },
    {
      label: 'City',
      info: building.property.address.city,
    },
    {
      label: 'State',
      info: building.property.address.state,
    },
  ]
  const propertyInfos = [
    {
      label: 'propertyType',
      info: building.property.propertyType,
    },
    {
      label: 'squareFeet',
      info: building.property.squareFeet,
    },
    {
      label: 'numberBedrooms',
      info: building.property.numberBedrooms,
    },
    {
      label: 'numberBaths',
      info: building.property.numberBaths,
    },
    {
      label: 'description',
      info: building.property.description,
    },
  ]
  const ownerInfos = [
    {
      label: 'Name',
      info:
        building.property.primaryOwner.user.firstName +
        building.property.primaryOwner.user.lastName,
    },
    {
      label: 'email',
      info: building.property.primaryOwner.user.email,
    },
    {
      label: 'phone',
      info: building.property.primaryOwner.user.phone,
    },
    {
      label: 'status',
      info: building.property.primaryOwner.user.status,
    },
  ]

  return (
    <div className={classes.rootContainer}>
      <Grid item xs={12} md={8} className={classes.sectionsContainer}>
        {/* TODO: here goes sections container */}
        <div className="row"></div>
      </Grid>
      <Grid item xs={12} md={4} className={classes.commonInfoContainer}>
        {/* TODO: here goes common info */}
        <div className={classes.infoPanel}>
          <Typography variant="h6" className="title">
            Address
          </Typography>
          {addressInfos.map((info) => (
            <InfoRow data={info} />
          ))}
        </div>
        <Divider />
        <div className={classes.infoPanel}>
          <Typography variant="h6" className="title">
            Properties
          </Typography>
          {propertyInfos.map((info) => (
            <InfoRow data={info} />
          ))}
        </div>
        <Divider />
        <div className={classes.infoPanel}>
          <Typography variant="h6" className="title">
            Owner
          </Typography>
          {ownerInfos.map((info) => (
            <InfoRow data={info} />
          ))}
        </div>
      </Grid>
    </div>
  )
}
