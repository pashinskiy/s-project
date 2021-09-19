import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { makeStyles } from "@material-ui/core"
import ScrollBar from "../components/schedule/scrollBar"
import ScheduleCard from "../components/schedule/scheduleCard"

// const useStyles = makeStyles(theme => ({
 
// }))

const TestPage = () => {
//   const classes = useStyles()
  const data = useStaticQuery(graphql`
  query MyQuery {
    allPrismicSchedule {
      edges {
        node {
          data {
            body {
              ... on PrismicScheduleDataBody {
                id
                items {
                  coach {
                    text
                  }
                  group {
                    text
                  }
                  time_from
                  time_to
                }
                primary {
                  week_day {
                    text
                  }
                  color_weekday
                }
              }
            }
          }
        }
      }
    }
  }`)

  const schedules = data.allPrismicSchedule.edges[0].node.data.body.map(item => item)

  return (
    <div>
      {/* <Seo title="СКА Swim" /> */}
      <ScrollBar>
      {schedules.map(schedule => (
            <ScheduleCard schedule={schedule}/>
        ))}
      </ScrollBar>
    </div>
  )
}

export default TestPage