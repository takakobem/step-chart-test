import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  color: {
    fill: theme.palette.secondary.main
  }
}))

export default function Popup() {
  const classes = useStyles({})
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" className={classes.color} />
      <rect x="10" y="11" width="20" height="13.125" rx="2" fill="#EAEBEC" />
      <rect
        x="15"
        y="25.2188"
        width="10"
        height="1.09375"
        rx="0.546875"
        fill="#EAEBEC"
      />
      <rect
        x="17.5"
        y="27.4062"
        width="5"
        height="1.09375"
        rx="0.546875"
        fill="#EAEBEC"
      />
    </svg>
  )
}
