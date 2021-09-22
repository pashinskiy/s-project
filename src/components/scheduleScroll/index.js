import React from 'react'
import ScrollBar from './scrollBar'
import ScheduleCard from './sheduleCard'
import { graphql, useStaticQuery } from "gatsby"


export default function ScheduleScroll(){
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

    return(
        <ScrollBar>
        {schedules.map((schedule, i) => (
              <ScheduleCard key={"child-" + i} schedule={schedule}/>
          ))}
        </ScrollBar>
    )
}