import React from "react"
import { makeStyles, Typography, Card } from "@material-ui/core"
import palette from "../../../../templates/colors.json"

const useStyle = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",

        boxShadow: "none",
        borderRadius: 0,
        backgroundColor: "#F3F6FF",
        padding: "2.77vw",
        width: "20.97vw",
        marginRight: "1.6vw",
        marginTop: 0,
        // "@media(min-width: 1440px)": {
        //   width: "302px",
        //   padding: "40px",
        //   marginRight: "24px",
        // },
        "@media(max-width: 767px)": {
          width: "55.7vw",
          padding: "5.79vw",
          marginRight: "5.7vw",
        },
    },

    weekNameContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",

        width: "15.41vw",
        height: "3.54vw",
        // "@media(min-width: 1440px)": {
        //   width: "222px",
        //   height: "51px",
        // },
        "@media(max-width: 767px)": {
          width: "37.19vw",
          height: "7.97vw",
        },
    },

    weekName: {
        textAlign: "center",
        color: "white",
        fontWeight: 700,
        
        fontSize: "1.66vw",
        flex: "0 0 14vw",
        // "@media(min-width: 1440px)": {
        //     flex: "0 0 202px",
        //     fontSize: 24,
        // },
        "@media(max-width: 767px)": {
            flex: "0 0 27.53vw",
            fontSize: "4.34vw",
        },
    },

    groupContainer: {
        alignSelf: "center",
        width: "12.56vw",
        marginTop: "1.73vw",
        // "@media(min-width: 1440px)": {
        //     marginTop: "25px",
        //     width: "181px",
        // },
        "@media(max-width: 767px)": {
            width: "43.71vw",
            marginTop: "6.03vw",
        },
    },

    groupName: {
        fontWeight: 700,
        color: theme.palette.color.blue,
        fontFamily: "'Exo 2'",
        
        fontSize: "2.5vw",
        // "@media(min-width: 1440px)": {
        //     fontSize: 36,
        // },
        "@media(max-width: 767px)": {
            fontSize: "4.34vw",
        },
    },

    timeAndCoach: {
        color: theme.palette.color.lightBlue,
        fontSize: "1.25vw",
        // "@media(min-width: 1440px)": {
        //     fontSize: 18,
        // },
        "@media(max-width: 767px)": {
            fontSize: "3.38vw",
        },

    },
}))

export default function ScheduleCard({ schedule }){
    const classes = useStyle()
    
    const color = schedule.primary.color_weekday
    const weekDayName = schedule.primary.week_day.text.toLowerCase()
    const groups = schedule.items.map((item, i) => (
        <div key={"group-" + i} className={classes.groupContainer}>
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