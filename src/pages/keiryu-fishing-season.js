import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, withArtDirection, getImage } from "gatsby-plugin-image";

import Navigation from "../components/navigation"
import Footer from "../components/footer.js"

const Season = ({ location }) => {
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
        media: "(max-width: 1024px)",
        image: getImage(data.mobileLogo),
      },
    ])

    if (location.pathname === rootPath) {
        header = (
        <div class="ml-20 mr-20 mb-2">
            <GatsbyImage image={logos} alt="Fallfish Tenkara" />
        </div>
        )
    } else {
        header = (
        <div class="ml-20 mr-20 mb-2">
            <Link to={`/`}>
            <GatsbyImage image={logos} alt="Fallfish Tenkara" />
            </Link>
        </div>
            
        )
    }
    return (
        <div className='heropattern-topography-gray-400'>
            <Navigation />
            <header class="pr-2 md:w-2/3">{header}</header>
            <div class="bg-neutral-100 h-screen mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
              <p class="ml-2 mb-4">Most Japanese keiryu and genryu (mountain streams) are closed (aka no fishing) from October 1st until the end of February. The closure coincide with spawning season and also help to protect the fisheries while there isn’t an abundant food supply. Occasionally certain regions closure schedule varies though – for example:</p>
              <p class="ml-2 mb-4">Some streams in the Tanzawa Mountains are open till October 15th.</p>
              <p class="ml-2 mb-4">Oshino does not open until March 15th.</p>
              <p class="ml-2 mb-4">Rivers in Nagano Prefecture open on February 16th.</p>
              <p class="ml-2 mb-4">Rivers on Izu Peninsula do not close until November 1st.</p>
              <p class="ml-2 mb-4">If the river you want to fish is open make sure you have a Japanese Fishing License.</p>
              <p class="ml-2 mb-4">There are a few options though if you want to fish in the off season as there are numerous “fish farms” that are open year around and stocked with hundreds if not thousands of fish (like this one). However, you typically have to pay upwards of $35 a day to fish at these places.</p>
              <p class="ml-2 mb-4">Also warm water rivers that aren’t able to support trout due to water temperature can be fished year around. I’ve seen many anglers on the Tama River and the Sagami River during the winter months when the keiryu and genryu are closed. The fish in these types of river tend to be bass, carp, and zatsugyo.</p>

              <iframe title="the tamazon - a wild river in Tokyo" width="560" height="315" src="https://www.youtube.com/embed/iYZjJ1Go2yM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
            <Footer />
        </div>
    )
}

export default Season