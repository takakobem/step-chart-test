import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  selected: {
    fill: theme.palette.secondary.main
  },
  notSelected: {
    fill: theme.palette.grey[500]
  }
}))

export default function Balloon({ selected }: { selected?: boolean }) {
  const classes = useStyles({})
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="20"
        className={selected ? classes.selected : classes.notSelected}
      />
      <path
        d="M20 11C14.475 11 10 14.6374 10 19.1243C10 21.464 11.223 23.5678 13.1734 25.0503C12.8077 25.998 12.1864 27.2328 11.1325 28.499C13.1302 28.499 15.7019 28.2355 17.6838 27.0204C18.4271 27.1659 19.2017 27.2485 20 27.2485C25.521 27.2485 30 23.6111 30 19.1243C30 14.6374 25.521 11 20 11Z"
        fill="white"
      />
    </svg>
  )
}
