import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import InputBase from '@material-ui/core/InputBase'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import Accordion from '@material-ui/core/Accordion'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  searchContainer: {
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    flexDirection: 'row',
  },
  searchFilter: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'snow',
    height: '100%',
    padding: theme.spacing(3),
  },
  margin: {
    margin: theme.spacing(1),
  },

  priceControl: {
    display: 'flex',
    flexDirection: 'row',
  },
}))

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase)

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const cities = ['New York', 'Kualar Lumpur', 'Dallas', 'Moscow', 'San fransisco']
const bedrooms = [1, 2, 3, 4, 5, 6, 7, 8]

const RoomList = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.searchContainer}>
      <Grid item xs={6} sm={3} spacing={3}>
        <div className={classes.searchFilter}>
          {/* TODO: here filtering options go */}
          <FormControl className={classes.margin}>
            <Typography variant="h6" component="h6" aria-labelledby="city-select">
              City
            </Typography>
            <Select
              labelId="city-select-label"
              id="city-select"
              value={10}
              onChange={(e) => {}}
              input={<BootstrapInput />}
            >
              {cities.map((cityName) => (
                <MenuItem value={cityName}> {cityName}</MenuItem>
              ))}
            </Select>
            <FormHelperText id="my-helper-text">Select city name.</FormHelperText>
          </FormControl>
          <FormControl className={classes.margin}>
            <Typography variant="h6" component="h6" aria-labelledby="city-select">
              Price
            </Typography>
            <div className={classes.priceControl}>
              <BootstrapInput />
              <BootstrapInput />
            </div>
            <FormHelperText id="my-helper-text">Select price range.</FormHelperText>
          </FormControl>
          <FormControl className={classes.margin}>
            <Typography variant="h6" component="h6" aria-labelledby="bedroom-select">
              Bedroom
            </Typography>
            <Select
              labelId="bedroom-select-label"
              id="bedroom-select"
              value={3}
              onChange={(e) => {}}
              input={<BootstrapInput />}
            >
              {bedrooms.map((roomCnt) => (
                <MenuItem value={roomCnt}> {roomCnt} - bedrooms</MenuItem>
              ))}
            </Select>
            <FormHelperText id="my-helper-text">Select bedroom count.</FormHelperText>
          </FormControl>
        </div>
      </Grid>
      <Grid item xs={6} sm={9}>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography gutterBottom variant="h5" component="h2">
            Filters
          </Typography>

          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>{' '}
      </Grid>
    </div>
  )
}

export default RoomList
