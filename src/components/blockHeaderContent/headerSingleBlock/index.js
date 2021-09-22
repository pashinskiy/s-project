import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core"
import WavesSVG from './wavesSVG'
import palette from "../../../templates/colors.json"

const useStyle = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginRight: "5.9vw",
        "@media(max-width: 767px)": {
            marginRight: 0,
            marginBottom: "12.07vw"
        },
    },

    waveSVG: {
        overflow: "hidden",
        width: "4.3vw", //62px на 1440 view px
        borderRadius: "1000px",
        marginBottom: "1.73vw",
        "@media(max-width: 767px)": {
            width: "14.97vw",
            marginBottom: "4.83vw",
        },
    },

    headerText: {
        fontFamily: "'Exo 2'",
        fontWeight: 700,
        lineHeight: "112.7%",
        fontSize: "2.5vw",
        marginBottom: "1.73vw",
        "@media(max-width: 767px)": {
            fontSize: "5.79vw",
            marginBottom: "6.03vw",
        },
    },

    descriptionText: {
        color: theme.palette.color.lightBlue,
        fontSize: "3.38vw",
    },
}))


export default function HeaderSingleBlock({ headerBlock }){
    const classes = useStyle()
    const colorWave = palette[headerBlock.svg_color]
    return(
        <div className={classes.root}>
            <div className={classes.waveSVG}>
                <WavesSVG color={colorWave}/>
            </div>
            <Typography className={classes.headerText}>
                {headerBlock.text.text}
            </Typography>

            <Typography className={classes.descriptionText}>
                {headerBlock.description_text.text}
            </Typography>

        </div>
    )
}