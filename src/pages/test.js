import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { makeStyles } from "@material-ui/core"
import ScheduleScroll from "../components/schedule/scheduleScroll"

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

  return (
    <div>
      {/* <Seo title="СКА Swim" /> */}
      <ScheduleScroll data={data} />
    </div>
  )
}

export default TestPage