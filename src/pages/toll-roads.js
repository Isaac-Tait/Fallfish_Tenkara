import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, withArtDirection, getImage } from "gatsby-plugin-image";

import Navigation from "../components/navigation"
import Footer from "../components/footer.js"

const Tolls = ({ location }) => {
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
              <p class="ml-2 mb-4">There are Toll Roads everywhere in Japan – and they aren’t cheap. If you’re driving around 150km you can expect to pay somewhere in the neighborhood of ¥7,000 in tolls. Road trips are just not the same in Japan as they are in the States. If you wanted to drive from say the southern tip of Japan (starting in Ibusuki, Kagoshima Prefecture) and drive to the northern tip of Japan (ending in Aomori, Aomori Prefecture) a distance of about 2,000km (or about the same distance as driving from San Diego, California to Seattle, California) it would cost you ¥40,500 in tolls one way! (Note: Taking the Shinkansen would actually cost ¥2,000 more than driving but would be about 5-6 hours faster).</p>
              <p class="ml-2 mb-4">One way to beat the toll cost is to leave super early in the morning, from midnight to 5am tolls are half price. However, most of the time you can only pay the discounted price if you have an ETC pass. If you can get one I highly recommend getting an ETC pass. They can save you a lot of money, especially if you’re traveling a lot by car. Getting an ETC pass is difficult though because you must have a Japanese credit card, and as a foreigner those are very difficult (if not impossible) to acquire.</p>
              <p class="ml-2 mb-4">The public transit system in Japan is amazing. However it does have some limitation. Taking a train can often get you close to the streams but you’ll have to figure out how to get from the train station to the stream. This is a good example of the limitations of the Japanese public transit – the trailhead which is only 100km from downtown Tokyo takes 6.5 hours to get to via public transit. Whereas driving would take 1.5 hours (and cost you ¥3000 in tolls the same cost as taking public transit). Sometimes it’s just easier to drive.</p>
              <p class="ml-2 mb-4">In the links section of this site I have included several helpful sites for travelling in Japan. Be sure to check it out.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Tolls