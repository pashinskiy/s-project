import * as React from "react"
// import { makeStyles } from "@material-ui/core"
import Seo from '../components/seo'
import BlockHeaderText from "../components/blockHeaderText"
import BlockHeaderContent from "../components/blockHeaderContent"
import ScheduleScroll from "../components/scheduleScroll"

// const useStyles = makeStyles(theme => ({
 
// }))

const TestPage = () => {
//   const classes = useStyles()

  return (
    <div>
      <Seo title="СКА Swim" />
      <BlockHeaderText text="Расписание" />
      <ScheduleScroll />

      <BlockHeaderContent />

    </div>
  )
}

export default TestPage