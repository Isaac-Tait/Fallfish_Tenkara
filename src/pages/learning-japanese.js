import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, withArtDirection, getImage } from "gatsby-plugin-image";

import Navigation from "../components/navigation"
import Footer from "../components/footer.js"

const Japanese = ({ location }) => {
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
              <p class="ml-2 mb-4">I launched this page in conjunction with my third article for Tenkara Angler&nbsp;<a 
                href="https://tenkaraangler.com/2018/08/18/conversing-in-japanese/" 
                class="text-red-500 hover:bg-red-500 hover:text-white"
                target="_blank" 
                rel="noopener noreferrer"
                >&quot;Conversing In Japanese&quot;</a>&nbsp;to help those on the journey of learning Japanese. I have been studying the Japanese language since the Fall of 2015.</p>
              <p class="ml-2 mb-4">Without further ado I have compiled this list of helpful resources for those learning Japanese. If you have any questions or would like to add a resource to the list please <a href="/contact" target="_blank" 
                rel="noopener noreferrer"
                class="text-red-500 hover:bg-red-500 hover:text-white">do not hesitate to contact</a>&nbsp;me.</p>
              <p class="ml-2 mb-4">A list of helpful mobile phone applications can be found here (in particular I am a huge fan of <a 
                href="https://guidetojapanese.org/learn/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-red-500 hover:bg-red-500 hover:text-white">Tae Kim&#39;s Guide to Learning Japanese</a>.</p>
              <p class="ml-2 mb-4">The&nbsp;<a 
                href="https://sites.google.com/a/sachens.com/tenkara-word-bank/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-red-500 hover:bg-red-500 hover:text-white">Tenkara Word Bank</a>&nbsp;is an excellent resource. I have saved it to my offline Evernote notebook “Tenkara” for reference when away from cell reception/wi-fi.</p>
              <img 
                class="w-8/12 rounded-lg shadow-lg mx-auto" 
                src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1669167374/Fallfish%20Tenkara/Flick/flick-fishing_coop-japan-tanzawa_mountains-trout-fishing-yamame-iwana-rainbow_trout-cherry_blossoms_y0bwcx.jpg" 
                alt="cherry blossoms over a lovely mountain stream" />
                <p class="text-center italic font-sm">Curious where this photo was taken?<a 
                href="/flick-co-op" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-red-500 hover:bg-red-500 hover:text-white">&nbsp;Find out here</a>...</p>
            </div>
            <Footer />
        </div>
    )
}

export default Japanese