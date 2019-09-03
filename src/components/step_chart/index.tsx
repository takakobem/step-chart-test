import React from 'react'
import Start from './Start'
import End from './End'
import DownArrow from './DownArrow'
import Balloon from './Balloon'
import Popup from './Popup'
import Split from './Split'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto'
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    verticalAlign: 'center'
  }
}))

export default function StepChart() {
  const classes = useStyles({})
  const [selected] = React.useState(false)

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Start />
        <DownArrow />
        <Balloon selected={selected} />
        <DownArrow />
        <Popup />
        <Split id="0" depth={0} />
        <End />
      </div>
    </div>
  )
}
