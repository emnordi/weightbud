import { Grid } from '@mui/material'

interface Props {
  text: string
}

const Home = ({ text }: Props) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Welcome to Weightbud, bud!</h1>
        </Grid>
        <Grid item xs={4}>
          <p>xs=4</p>
        </Grid>
        <Grid item xs={4}>
          <p>xs=4</p>
        </Grid>
        <Grid item xs={4}>
          <p>xs=4</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
