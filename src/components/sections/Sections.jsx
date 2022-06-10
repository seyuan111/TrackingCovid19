import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import styles from './Sections.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Sections = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
  if(!confirmed){
    return "Loading..."
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Those infected</Typography>
            <Typography variant="h5">
              <CountUp 
                start={0}
                end={confirmed.value}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Those recovered</Typography>
            <Typography variant="h5">
              <CountUp 
                start={0}
                end={recovered.value}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of recoveries</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp 
                start={0}
                end={deaths.value}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Sections