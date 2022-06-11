import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"
import Navigation from "../components/navigation"
import Footer from "../components/footer.js"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div className='heropattern-topography-gray-400'>
    <Navigation />
      <Link to="/" className='text-3xl text-red-500 hover:underline hover:text-slate-500'>
        <p>Take me to the home page...</p>
      </Link>
        <div>
          <p class="pl-2 font-bold text-lg bg-red-500 text-white">Blog posts referenced by Prefecture</p>
            <div className='bg-neutral-100 h-screen mb-4 w-full lg:w-2/3 mx-auto overflow-scroll-y rounded-lg shadow-xl'>
            <p class="ml-2 mt-2 text-slate-600 font-semibold">If you are interested in reading about my travels and adventures in a specific Japanese Prefecture then you have come to the right page.</p>
              {group.map(tag => (
                <li class="ml-2 mt-2 tracking-wide " key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </div>
          </div>
      <Footer />
  </div>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`