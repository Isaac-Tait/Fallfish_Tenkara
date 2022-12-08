import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

import Navigation from "../components/navigation"
import Footer from "../components/footer.js"

const Stores = ({ location }) => {
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
              <div class="bg-neutral-100 h-screen mb-4 w-full lg:w-2/3 mx-auto overflow-y-scroll rounded-lg shadow-xl">
                <p class="ml-2 mb-4">A short list of my most recently visited fishing stores in the Kanto Plains region of Japan (aka Tokyo).</p>
                <p class="ml-2 mb-4 font-semibold text-2xl text-center">Yokosuka/Yokohama</p>
                <p class="ml-2 mb-4">Kadoya Outdoor Shop ~ 2-8,Honcho,Yokosuka,Japan,238-0041 It is an easy walk from the Yokosukachuo Train Station (Note: Google Maps shows the shop as in the alley. This is incorrect. It is right off the main street diagonal from Surf Taco)</p>
                <p class="ml-2 mb-4">Sansui FishingStore ~ Sansui is a chain store but it has a lot of character and a large selection of fishing equipment. Located at:
                3 Chome-30-8 Tsuruyacho Kanagawa Ward, Yokohama, Kanagawa Prefecture 221-0835 Japan it is an easy walk from the Yokohama Train Station.</p>
                <p class="ml-2 mb-4 font-semibold text-2xl text-center">Tokyo</p>
                <p class="ml-2 mb-4">Groundstore ~ <a 
                  href="/groundstore" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-red-500 hover:bg-red-500 hover:text-white">See my blog post about this shop</a>. It is in Chofu and worth stopping in.</p>
                <p class="ml-2 mb-4">Sansui Fishing Store ~ This particular store is over 110 years old. The sales person who helped us was very friendly and despite not knowing too much Japanese we were able to glean a lot of information from him.<a 
                  href="https://blog.tenkarausa.com/15-hours/sansui/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-red-500 hover:bg-red-500 hover:text-white">Here is a link</a>&nbsp;to Tenkara USA blog post about this store. The store is very small, only about 10&#39; wide and 50&#39; long however, it is packed with some awesome Tenkara gear. I highly recommend you check it out if you are in the area.</p>
                <p class="ml-2 mb-4">Joshuya Fishing Store ~ This store is located at 1-7 Sakuragaokacho Shibuya, Tokyo 150-0031 Japan. It does not have as much character as Sansui, but it does have a lot of fishing gear. It is four stories tall and is all about fishing. Fly fishing takes up a small corner on the 2nd floor and Tenkara is allocated to one isle on the top floor, which is the smallest floor and has no elevator access. Most of the fishing gear is focused on salt water fishing.</p>
                <img 
                class="w-8/12 rounded-lg shadow-lg mx-auto" 
                src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1669166269/Fallfish%20Tenkara/Overlanding/overlanding-tenkara-japan-keiryu-adventure-off_roading-road_less_traveled-tokyo-small_stream_rgkxhb.jpg" 
                alt="cherry blossoms over a lovely mountain stream" />
                <p class="text-center italic font-sm">Curious where this photo was taken?<a 
                href="/overlanding-tenkara" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-red-500 hover:bg-red-500 hover:text-white">&nbsp;Find out here</a>...</p>
              </div>
              <Footer />
        </div>
    )
}

export default Stores