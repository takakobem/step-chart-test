import React from 'react'
import { makeStyles } from '@material-ui/core'
import Balloon from './Balloon'
import AddStep from './AddStep'
import { CSSProperties } from '@material-ui/styles'

const SmallDownArrow = () => (
  <svg
    display="flex"
    width="16"
    height="36"
    viewBox="0 0 16 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 28L14.6 26.6L9 32.2V0H7V32.2L1.4 26.6L0 28L8 36L16 28Z"
      fill="#EAEBEC"
    />
  </svg>
)

const useStyles = makeStyles(theme => {
  const horizontalLine: CSSProperties = {
    position: 'absolute',
    height: 2,
    width: '50%',
    backgroundColor: 'white'
  }
  return {
    centering: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    verticalLine: {
      width: 2,
      height: '100%',
      minHeight: 36,
      backgroundColor: 'white'
    },
    addStep: {
      flex: 1
    },
    topLeftLine: {
      ...horizontalLine,
      top: 0,
      right: 0
    },
    topRightLine: {
      ...horizontalLine,
      top: 0,
      left: 0
    },
    bottomLeftLine: {
      ...horizontalLine,
      bottom: 0,
      right: 0
    },
    bottomRightLine: {
      ...horizontalLine,
      bottom: 0,
      left: 0
    },
    verticalContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      alignItems: 'center'
    },
    container: {
      display: 'flex'
    },
    step: {
      position: 'relative',
      minWidth: 92
    },
    verticalSplitLine: {
      height: '100%'
    }
  }
})

export default function Split({
  depth = 0,
  id
}: {
  depth: number
  id: string
}) {
  const classes = useStyles({})
  if (depth > 3) {
    return null
  }
  return (
    <div className={classes.centering}>
      <AddStep>
        <div className={classes.verticalLine}></div>
      </AddStep>
      <div className={classes.container}>
        <div className={classes.step}>
          <div className={classes.topLeftLine}></div>
          <div className={classes.verticalContainer}>
            <AddStep>
              <div className={classes.verticalLine}></div>
            </AddStep>
          </div>
          <div className={classes.bottomLeftLine}></div>
        </div>
        <div className={`${classes.step} ${classes.centering}`}>
          <div className={classes.topRightLine}></div>
          <AddStep>
            <SmallDownArrow />
          </AddStep>
          <Balloon />
          <AddStep>
            <SmallDownArrow />
          </AddStep>
          <Split id="0" depth={depth + 1} />
          <Balloon />
          <AddStep>
            <div className={classes.verticalLine}></div>
          </AddStep>
          <div className={classes.bottomRightLine}></div>
        </div>
      </div>
      <AddStep>
        <SmallDownArrow />
      </AddStep>
    </div>
  )
}
