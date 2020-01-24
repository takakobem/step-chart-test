import React from "react"
import { makeStyles } from "@material-ui/core"
import Balloon from "./Balloon"
import AddStep from "./AddStep"
import { CSSProperties } from "@material-ui/styles"

const useStyles = makeStyles(theme => {
  const horizontalLine: CSSProperties = {
    position: "absolute",
    height: 2,
    width: "50%",
    backgroundColor: "white",
  }
  return {
    centering: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "start",
    },
    verticalLine: {
      width: 2,
      height: "100%",
      minHeight: 36,
      backgroundColor: "white",
      margin: "0 7px",
    },
    addStep: {
      flex: 1,
    },
    topLeftLine: {
      ...horizontalLine,
      top: 0,
      left: 19,
      width: "100%",
    },
    topRightLine: {
      ...horizontalLine,
      top: 0,
      left: 0,
    },
    bottomLeftLine: {
      ...horizontalLine,
      bottom: 0,
      left: 19,
      width: "100%",
    },
    bottomRightLine: {
      ...horizontalLine,
      bottom: 0,
      left: 0,
    },
    verticalContainer: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      alignItems: "start",
    },
    container: {
      display: "flex",
    },
    step: {
      position: "relative",
      minWidth: 92,
    },
    verticalSplitLine: {
      height: "100%",
    },
    smallDownArrow: {
      // margin: "0 12px",
    },
    smallDownArrowContainer: {
      margin: "0 12px",
    },
  }
})

const SmallDownArrow = () => {
  const classes = useStyles({})
  return (
    <svg
      className={classes.smallDownArrow}
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
}

export default function ErrorHandling({
  id,
}: {
  id: string
}) {
  const classes = useStyles({})
  return (
    <div className={classes.centering}>
      <AddStep>
        <div className={classes.verticalLine}></div>
      </AddStep>
      <div className={classes.container}>
        <div className={classes.step}>
          <div className={classes.topLeftLine}></div>
          <div className={classes.verticalContainer}>
            <div className={classes.smallDownArrowContainer}>
            <SmallDownArrow />
            </div>
            <Balloon />
            <AddStep>
              <div className={classes.verticalLine}></div>
            </AddStep>
          </div>
        </div>
        <div className={`${classes.step} ${classes.centering}`}>
          <AddStep>
            <SmallDownArrow />
          </AddStep>
          <Balloon />
          <AddStep>
            <SmallDownArrow />
          </AddStep>
          <Balloon />
        </div>
      </div>
      <AddStep>
        <SmallDownArrow />
      </AddStep>
    </div>
  )
}
