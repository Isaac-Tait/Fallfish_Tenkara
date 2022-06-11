//Pagination located at the bottom of blog to navigate back or forwards...
import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Navigation from "../components/navigation"
import Seo from "../components/seo"
import Footer from "../components/footer"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <div location={location} class="heropattern-topography-gray-400">
      <Navigation />
      <Link to="/" class="uppercase font-bold text-red-500 pl-2">Take me back to the Home Page</Link>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      
      <article>
        <header class="pl-6 mt-4 bg-red-500">
            <p class="text-white text-3xl">{post.frontmatter.title}</p>
            <p class="pl-2 text-gray-300">{post.frontmatter.date}</p>
        </header>
          
        <div class="w-11/12 mx-auto bg-gray-100 rounded-xl">
          <div class="px-2">
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
        
      </article>
      
      <div class='mt-4'>
          <p class="font-semibold flex w-1/2 bg-red-500 justify-center mx-auto text-white rounded-md">Blog Navigation</p>
            <nav class="text-xs md:text-base flex w-1/2 justify-between mx-auto">

            <div>
            {previous && (
                <Link to={previous.fields.slug} rel="prev">
                    <button class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black">← {previous.frontmatter.title}</button> 
                </Link>
                )}
            </div>

            <div>
            {next && (
                <Link to={next.fields.slug} rel="next">
                    <button class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black">{next.frontmatter.title} →</button>
                </Link>
                )}
            </div>
      
            </nav>
        </div>

      <div class="w-1/2 mx-auto">
          <Bio />
      </div>
      
      <Footer />
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
