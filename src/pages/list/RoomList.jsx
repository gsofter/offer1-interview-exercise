import React, { useEffect, useState, useCallback } from 'react'
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
import { BuildingCard } from '../../components'

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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  searchContainer: {
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    flexDirection: 'row',
    marginBottom: theme.spacing(5),
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

  const [filteredBuildings, setFilteredBuildings] = useState([])
  useEffect(() => {
    filterBuildings()
  }, [buildings, filter])

  const onChangeCity = (e, newValue) => {
    setFilter({ ...filter, city: newValue })
    console.log(newValue)
  }

  const onChangePrice = (e) => {
    console.log(e.target.name)
    setFilter({
      ...filter,
      price: {
        ...filter.price,
        [e.target.name.split('.')[1]]: e.target.value,
      },
    })
  }

  const filterBuildings = () => {
    const filtered = buildings.filter((b) => {
      let check = true
      if (filter.city !== '' && filter.city !== null)
        check = check && b.property.address.city === filter.city
      if (check && filter.price.min !== '' && filter.price.min !== null)
        check = b.price >= filter.price.min
      if (check && filter.price.max !== '' && filter.price.max !== null)
        check = b.price <= filter.price.max
      if (check && filter.bedrooms !== '' && filter.bedrooms !== null)
        check = b.property.numberBedrooms === filter.bedrooms
      return check
    })
    console.log(filtered)
    setFilteredBuildings(filtered)
  }

  const onChangeBedroomCnt = (e) => {
    setFilter({ ...filter, bedrooms: e.target.value })
  }

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
              <TextField
                variant="outlined"
                type="number"
                name="price.min"
                onChange={onChangePrice}
              />
              <TextField
                variant="outlined"
                type="number"
                name="price.max"
                onChange={onChangePrice}
              />
            </div>
            <FormHelperText id="my-helper-text">Select price range.</FormHelperText>
          </FormControl>
          <FormControl className={classes.margin}>
            <Typography variant="h6" component="h6" aria-labelledby="bedroom-select">
              Bedroom
            </Typography>
            <Select variant="outlined" onChange={onChangeBedroomCnt}>
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
          <Typography gutterBottom variant="h6">
            Total: {filteredBuildings.length} buildings found
          </Typography>

          <Grid container spacing={4}>
            {filteredBuildings.map((house) => (
              <Grid item key={house.id} xs={12} sm={6} md={4}>
                <BuildingCard building={house} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
    </div>
  )
}

export default RoomList
