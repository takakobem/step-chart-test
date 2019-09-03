import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: 14,
    lineHeight: '21px',
    fontWeight: 'bold',
    display: 'inline-block',
    padding: '0 4px',
    color: '#EAEBEC'
  }
}))

export default function Start() {
  const classes = useStyles({})
  return <div className={classes.root}>終了</div>
}
