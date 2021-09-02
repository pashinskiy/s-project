import * as React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core"
import Seo from "../components/seo"
import Layout from "../components/layout"

const useStyles = makeStyles(theme => ({
 
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Seo title="СКА Swim" />
    </Layout>
  )
}

/**
 * Главная страница
 * @module src/page/index
 */
export default IndexPage