import React from "react";

import { GatsbyImage, withArtDirection, getImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby"

import Navigation from "../components/navigation"
import Footer from "../components/footer.js"

const Press = ({ location }) => {
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
                <p>To keep things simple you should just checkout my vitae page <a href='https://isaac-tait.github.io' target="_blank" rel="noopener noreferrer" className='text-red-500 hover:text-slate-500 underline'>here</a>.</p>               
                  <img class="w-8/12 rounded-lg shadow-lg mx-auto mt-10" src="https://fallfish-tenkara-images.s3-us-west-1.amazonaws.com/Black+Rifle+Coffee.jpg" alt="Sipping a great cup of coffee while contemplating the greater meaning of life..." />
              </div>
            <Footer />
        </div>
    )
};

export default Press