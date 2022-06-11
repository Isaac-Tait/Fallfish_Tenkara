import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer.js"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div className='heropattern-topography-gray-400'>
      <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>If you want to tell me all about your disappointment you can drop me a note</p>
        <Link to='/about' className='underline text-red-500 hover:text-slate-500'>Contact me and tell me about stuff...</Link>
      </Layout>
      <Footer />
    </div>
    
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
