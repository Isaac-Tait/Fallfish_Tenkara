import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Navigation from "../components/navigation"
import Footer from "../components/footer.js"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <div className='heropattern-topography-gray-400'>
      <Navigation />
        <Link to="/" className='text-3xl text-red-500 hover:underline hover:text-slate-500'>
          <p>Take me to the home page...</p>
        </Link>
      <div class="bg-neutral-100 h-screen mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
        <h1 className='text-red-500 uppercase font-semibold'>{tagHeader}</h1>
        <ul className='ml-4'>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug} className='underline hover:text-red-500'>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
        
        <div className='text-red-500 underline hover:text-slate-500'>
          <Link to="/tags">Return to all tags</Link>
        </div>
      </div>
    <Footer />
  </div>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
