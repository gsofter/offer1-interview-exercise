import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import BuildingImage from '../../components/BuildingImage'
import Typography from '@material-ui/core/Typography'
import { PageTitle, BuildingInfo } from '../../components'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  buildingHeader: {},
}))

export default function RoomDetail({ building, loading = false, ...props }) {
  const classes = useStyles()

  if (loading) return <div> Loading ... </div>
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <PageTitle title={building.titleCompany.name} />
        <BuildingImage image={building.property.primaryImageUrl || ''} />
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
