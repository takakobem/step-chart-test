import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#EAEBEC',
    borderRadius: 3,
    fontSize: 14,
    lineHeight: '21px',
    fontWeight: 'bold',
    display: 'inline-block',
    padding: '0 4px',
    color: '#4E5156'
  }
}))

export default function Start() {
  const classes = useStyles()
  return <div className={classes.root}>開始</div>
}
