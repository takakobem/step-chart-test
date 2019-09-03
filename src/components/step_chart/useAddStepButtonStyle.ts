import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    padding: '0 4px',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:hover $button': {
      opacity: 1
    }
  },
  button: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    opacity: 0,
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.shortest
    })
  }
}))
