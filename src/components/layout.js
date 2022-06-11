import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Navigation from "../components/navigation"
import Slider from "../components/slider"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import Footer from "../components/footer"
import Pagination from "../templates/blog-list-grouping"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const data = useStaticQuery(graphql`{
  desktopLogo: file(absolutePath: {regex: "/FfT_Logo_Desktop.png/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 100
        placeholder: TRACED_SVG
        formats: [AUTO, WEBP, AVIF]
        layout: CONSTRAINED
      )
    }
  }
  mobileLogo: file(absolutePath: {regex: "/FfT_Logo_Mobile.png/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 300
        quality: 100
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
        layout: CONSTRAINED
      )
    }
  }
}
`)

const logos = withArtDirection(getImage(data.desktopLogo), [
  {
    media: "(max-width: 750px)",
    image: getImage(data.mobileLogo),
  },
])

  if (location.pathname === rootPath) {
    header = (
      <div class="px-4 mb-6 md:ml-20">
        <GatsbyImage 
          image={logos} 
          alt="Site_Logo"
          objectFit="scale-down" 
        />
      </div>
    )
  } else {
    header = (
      <div class="px-4 mb-6 md:ml-20">
        <Link to={`/`}>
          <GatsbyImage 
            image={logos} 
            alt="Site_Logo"
            objectFit="scale-down" 
          />
        </Link>
      </div>
        
    )
  }
  return (
    <div class="flex flex-col heropattern-topography-gray-400">
      <Navigation />
      <header class="pr-2">{header}</header>  
        <div class="hidden md:block w-2/3 mx-auto">
          <Slider />
        </div>
      <div class="bg-neutral-100 mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
        <main>{children}</main>
        <Pagination />
      </div>
        <Footer />
    </div>
  )
}

export default Layout
