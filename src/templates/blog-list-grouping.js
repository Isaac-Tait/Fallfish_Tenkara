import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Pager from "../components/pager"

export const pageQuery = graphql`query BlogPagination($skip: Int!, $limit: Int!) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: $limit, skip: $skip) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
}`

const BlogPagination = ({ data, location, pageContext }) => {
    if (!data) { return null }
    const posts = data.allMarkdownRemark.edges;
  
    return (
      <Layout location={location}>
        {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <div class="px-4 mt-2">

                  <div class="font-extrabold text-xl hover:text-red-500 hover:rounded">
                    <Link to={node.fields.slug}> {title} </Link>
                  </div>
                  <div class="pl-2 text-sm text-gray-800">
                    <p>{node.frontmatter.date}</p>
                  </div>

                  <div class="mb-6 italic">
                    <p dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }} />
                  </div>

                </div>
              </div>
            )
        })}
  
        <Pager pageContext={pageContext} />
      </Layout>
    )
};

export default BlogPagination;

