import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import * as utils from '../../services/utils'
import { Info } from '@material-ui/icons'

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
  sectionPanel: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    borderTop: '1px solid rgba(0,0,0,.1)',
    display: 'flex',
    flexDirection: 'row',
    '& .title': {},
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
    marginBottom: '0.6em',
    borderBottom: '1px solid rgba(0,0,0,.1)',
    '& .buildinfo_label': {
      color: 'rgba(0,0,0,.6)',
    },
    '& .buildinfo_info': {
      color: 'rgba(0,0,0,.8)',
    },
  },
  infoRowNoBorder: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '0.6em',
    '& .buildinfo_label': {
      color: 'rgba(0,0,0,.6)',
    },
    '& .buildinfo_info': {
      color: 'rgba(0,0,0,.8)',
    },
  },
}))

export const InfoRow = ({ data, border = true }) => {
  const classes = useStyles()
  if (!data.info || data.info === undefined || data.info === '') {
    return (
      <div className={border ? classes.infoRow : classes.infoRowNoBorder}>
        <div className="col-md-4 col-sm-12">
          <Typography variant="body2" className="buildinfo_label">
            {data.label}
          </Typography>
        </div>
        <div className="col-md-8 col-sm-12">
          <Typography variant="body2" className="buildinfo_info"></Typography>
        </div>
      </div>
    )
  }

  if (typeof data.info === 'string')
    return (
      <div className={border ? classes.infoRow : classes.infoRowNoBorder}>
        <div className="col-md-4 col-sm-12 pull-left">
          <Typography variant="body2" className="buildinfo_label">
            {data.label}
          </Typography>
        </div>
        <div className="col-md-8 col-sm-12 pull-left">
          <Typography variant="body2" className="buildinfo_info">
            {data.info}
          </Typography>
        </div>
      </div>
    )
  const infos = Object.keys(data.info)
    .filter((key) => key !== 'id')
    .map((key) => data.info[key])
  return (
    <div className={border ? classes.infoRow : classes.infoRowNoBorder}>
      <div className="col-md-4 col-sm-12 pull-left">
        <Typography variant="body2" className="buildinfo_label pull-left">
          {data.label}
        </Typography>
      </div>
      <div className="col-md-4 col-sm-12 pull-left">
        <div className="buildinfo_info">
          {infos.map((subInfo) => (
            <Typography variant="body2">{subInfo}</Typography>
          ))}
        </div>
      </div>
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

  const escrow = building.escrowCompany
  const escrowCompanyInfos = Object.keys(building.escrowCompany)
    .filter((key) => key !== 'id')
    .map((key) => ({ label: utils.splitCamelCaseToString(key), info: escrow[key] }))

  const titleCompanyInfos = Object.keys(building.titleCompany)
    .filter((key) => key !== 'id')
    .map((key) => ({ label: utils.splitCamelCaseToString(key), info: escrow[key] }))
  console.log(titleCompanyInfos)
  return (
    <div className={classes.rootContainer}>
      <Grid item xs={12} md={8} className={classes.sectionsContainer}>
        {/* TODO: here goes sections container */}
        <div className={classes.sectionPanel}>
          <div className="col-sm-12 col-md-4">
            <Typography className="title" variant="h5">
              Escrow Company
            </Typography>
          </div>
          <div className="info col-sm-12 col-md-8">
            {escrowCompanyInfos.map((info) => (
              <InfoRow data={info} border={false} />
            ))}
          </div>
        </div>
        <div className={classes.sectionPanel}>
          <div className="col-sm-12 col-md-4">
            <Typography className="title" variant="h5">
              Title Company
            </Typography>
          </div>
          <div className="info col-sm-12 col-md-8">
            {titleCompanyInfos.map((info) => (
              <InfoRow data={info} border={false} />
            ))}
          </div>
        </div>
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
