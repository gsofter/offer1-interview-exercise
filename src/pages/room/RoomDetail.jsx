import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import BuildingImage from '../../components/BuildingImage'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { PageTitle, BuildingInfo } from '../../components'
import { deepOrange, green } from '@material-ui/core/colors'
import HotelIcon from '@material-ui/icons/Hotel'
import PhotoSizeSelectSmallIcon from '@material-ui/icons/PhotoSizeSelectSmall'
import BathtubIcon from '@material-ui/icons/Bathtub'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import cx from 'classnames'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  buildingHeader: {},
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  avatar: {
    display: 'inherit',
    '& .pending': {
      backgroundColor: '#8b8b07',
      color: 'white',
    },
    '& .active': {
      backgroundColor: 'green',
      color: 'white',
    },
  },

  infoContainer: {
    '& .info-item': {
      marginBottom: '0.7em',
    },
  },
}))

export default function RoomDetail({ building, loading = false, ...props }) {
  const classes = useStyles()

  if (loading) return <div> Loading ... </div>

  const status = building.state.toLowerCase()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className="row d-flex flex-row">
          <div className="col-sm-12 col-md-8">
            <BuildingImage image={building.property.primaryImageUrl || ''} />
          </div>
          <div className="col-sm-12 col-md-4">
            <div className={classes.infoContainer}>
              <div className="companyTitle info-item">
                <Typography variant="h5" color="rgb(255,33,45)">
                  {/* TODO: building Title */}
                  {building.property.primaryOwner.user.firstName +
                    building.property.primaryOwner.user.lastName}
                </Typography>
              </div>
              <div className="info-item">
                <div className={classes.avatar}>
                  <span className={status}>{status.toUpperCase()}</span>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">
                  <PhotoSizeSelectSmallIcon />
                </span>
                <span> {building.property.squareFeet} km</span>
              </div>
              <div className="info-item">
                <span className="icon">
                  <HotelIcon />
                </span>
                <span> {building.property.numberBedrooms} bed rooms </span>
              </div>
              <div className="info-item">
                <span className="icon">
                  <BathtubIcon />
                </span>
                <span> {building.property.numberBaths} bath rooms </span>
              </div>
              <div className="info-item">
                <span className="icon">
                  <PhoneInTalkIcon />
                </span>
                <span> Phone: {building.property.primaryOwner.user.phone} </span>
              </div>
              <div className="info-item">
                <span className="icon">
                  <MailOutlineIcon />
                </span>
                <span> Email: {building.property.primaryOwner.user.email} </span>
              </div>
            </div>
          </div>
        </div>
        <BuildingInfo building={building} />
        {/* <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="From the firehose" posts={posts} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid> */}
      </Container>
    </React.Fragment>
  )
}
