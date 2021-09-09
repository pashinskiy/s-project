import React from "react"
import { makeStyles, Grid, Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"
import ScheduleCard from "./scheduleCard"


const useStyles = makeStyles(theme => ({
 
}))

export default function ScheduleScroll({ data }){
    const schedules = data.allPrismicSchedule.edges[0].node.data.body.map(item => item)
    console.log(schedules)
    return(
        schedules.map(schedule => (
            <ScheduleCard schedule={schedule}/>
        ))
    )
}