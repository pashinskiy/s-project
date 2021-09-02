import * as React from "react"
import Seo from "../components/seo"
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)
/**
 * Страница 404
 * @module src/page/404
 */
export default NotFoundPage
