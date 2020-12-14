import React, { useEffect, useState, useCallback } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputBase from '@material-ui/core/InputBase'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

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
    '& a': {
      textDecoration: 'none',
    },
    border: '1px solid',
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
  listContainer: {
    width: '100%',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}))

const bedrooms = [1, 2, 3, 4, 5, 6, 7, 8]

const RoomList = ({ buildings, cities }) => {
  const classes = useStyles()
  const [filter, setFilter] = useState({
    city: '',
    price: { min: '', max: '' },
    bedrooms: '',
  })

  const [filteredBuildings, setFilteredBuilding] = useState(buildings)
  useEffect(() => {
    filterBuildings()
  }, [])
  const onChangeCity = (e, newValue) => {
    console.log(newValue)
  }
  const filterBuildings = useCallback(() => {
    const filtered = buildings.filter((b) => {
      let check = true
      if (filter.city !== '' && filter.city !== null)
        check = check && b.property.address.city === filter.city
      if (check && filter.price.min !== '') check = b.price >= filter.price.min
      if (check && filter.price.max !== '') check = b.price <= filter.price.max
      if (check && filter.bedrooms !== '') check = b.property.numberBedrooms === filter.bedrooms
      return check
    })
    setFilteredBuilding(filtered)
  })

  return (
    <div className={classes.searchContainer}>
      <Grid item xs={12} sm={3} spacing={3}>
        <div className={classes.searchFilter}>
          {/* TODO: here filtering options go */}
          <FormControl className={classes.margin}>
            <Typography variant="h6" component="h6" aria-labelledby="city-select">
              City
            </Typography>
            <Autocomplete
              id="combo-box-demo"
              options={cities}
              onChange={onChangeCity}
              renderInput={(params) => <TextField {...params} variant="outlined" />}
            />
            <FormHelperText id="my-helper-text">Select city name.</FormHelperText>
          </FormControl>
          <FormControl className={classes.margin}>
            <Typography variant="h6" component="h6" aria-labelledby="city-select">
              Price
            </Typography>
            <div className={classes.priceControl}>
              <TextField variant="outlined" type="number" />
              <TextField variant="outlined" type="number" />
            </div>
            <FormHelperText id="my-helper-text">Select price range.</FormHelperText>
          </FormControl>
          <FormControl className={classes.margin}>
            <Typography variant="h6" component="h6" aria-labelledby="bedroom-select">
              Bedroom
            </Typography>
            <Select variant="outlined" value={3} onChange={(e) => {}}>
              {bedrooms.map((roomCnt) => (
                <MenuItem value={roomCnt}> {roomCnt} - bedrooms</MenuItem>
              ))}
            </Select>
            <FormHelperText id="my-helper-text">Select bedroom count.</FormHelperText>
          </FormControl>
        </div>
      </Grid>
      <Grid item xs={12} sm={9}>
        <div className={classes.listContainer} maxWidth="lg">
          <Typography gutterBottom variant="h5" component="h2">
            Total: {filterBuildings.length} buildings found
          </Typography>

          <Grid container spacing={4}>
            {filteredBuildings.map((house) => (
              <Grid item key={house.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image={house.property.primaryImageUrl}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="body1" component="h5">
                        {house.titleCompany.name}
                      </Typography>
                      <Typography variant="body2">{house.property.description}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href={`/room/${house.id}`}>
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
    </div>
  )
}

export default RoomList
