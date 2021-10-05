import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
    rootText: {
        color: theme.palette.color.blue,
        fontFamily: "'Exo 2'",
        fontWeight: 700,
        fontSize: "6.66vw",
        marginLeft: "3.47vw",
        marginBottom: "4.16vw",
        "@media(min-width: 1440px)": {
            fontSize: "96px",
            marginLeft: "50px",
            marginBottom: "60px",
          },
        "@media(max-width: 767px)": {
            fontSize: "8.69vw",
            marginLeft: "6.03vw",
            marginBottom: "4.83vw",
          },
    },
}))

export default function BlockHeaderText({ text }) {
    const classes = useStyle()
    return(
        <Typography className={classes.rootText}>
            {text}

        </Typography>
    )
}