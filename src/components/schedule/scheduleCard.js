import React from "react"
import { makeStyles, Typography, Card } from "@material-ui/core"
import palette from "../../templates/colors.json"

const useStyle = makeStyles(theme => ({
    root: {
        // height: "200px",
        // margin: "20px",
        display: "flex",
        flexDirection: "column",

        boxShadow: "none",
        borderRadius: 0,
        backgroundColor: "#F3F6FF",
        padding: "2.77vw",
        width: "20.97vw",
        marginRight: "1.6vw",
        "@media(min-width: 1440px)": {
          width: "302px",
          padding: "40px",
          marginRight: "24px",
        },
        "@media(max-width: 767px)": {
          width: "30.1vw",
          padding: "3.25vw",
          marginRight: "3.12vw",
        },
    },

    weekNameContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",

        width: "15.41vw",
        height: "3.54vw",
        "@media(min-width: 1440px)": {
          width: "222px",
          height: "51px",
        },
        "@media(max-width: 767px)": {
          width: "20.07vw",
          height: "4.3vw",
        },
    },

    weekName: {
        textAlign: "center",
        color: "white",
        fontWeight: 700,
        
        fontSize: "1.66vw",
        flex: "0 0 14vw",
        "@media(min-width: 1440px)": {
            flex: "0 0 202px",
            fontSize: 24,
        },
        "@media(max-width: 767px)": {
            flex: "0 0 14.86vw",
            fontSize: "2.34vw",
        },
    },

    groupContainer: {
        width: "12.56vw",
        marginTop: "1.73vw",
        "@media(min-width: 1440px)": {
            marginTop: "25px",
            width: "181px",
        },
        "@media(max-width: 767px)": {
            marginTop: "3.26vw",
            width: "23.59vw",
        },
    },

    groupName: {
        fontWeight: 700,
        color: theme.palette.color.blue,
        fontFamily: "'Exo 2'",
        
        fontSize: "2.5vw",
        "@media(min-width: 1440px)": {
            fontSize: 36,
        },
        "@media(max-width: 767px)": {
            fontSize: "2.34vw",
        },
    },

    timeAndCoach: {
        color: theme.palette.color.lightBlue,
        fontSize: "1.25vw",
        "@media(min-width: 1440px)": {
            fontSize: 18,
        },
        "@media(max-width: 767px)": {
            fontSize: "1.82vw",
        },

    },
}))

export default function ScheduleCard({ schedule }){
    const classes = useStyle()
    
    const color = schedule.primary.color_weekday
    const weekDayName = schedule.primary.week_day.text.toLowerCase()
    const groups = schedule.items.map(item => (
        <div className={classes.groupContainer}>
                <Typography className={classes.groupName}>
                    {item.group.text}
                </Typography>

                <Typography className={classes.timeAndCoach}>
                    {item.time_from + " — " + item.time_to}
                </Typography>
                
                <Typography className={classes.timeAndCoach}>
                    {"Тренер: " + item.coach.text}
                </Typography>
        </div>
    ))

    return(
        <Card className={classes.root}>
            <div className={classes.weekNameContainer}
                 style={{ backgroundColor: palette[color]}}>
                <Typography className={classes.weekName}>{weekDayName}</Typography>
            </div>

            {groups}
            

        </Card>
    )
}