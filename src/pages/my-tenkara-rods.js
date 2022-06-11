import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, withArtDirection, getImage } from "gatsby-plugin-image";

import Navigation from "../components/navigation"
import Footer from "../components/footer.js"

const TenkaraRods = ({ location }) => {
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
                <div class="flex w-1/2 bg-neutral-100 justify-between mx-auto flex-col">
                    <p class="mx-2 my-1">I have fished Tenkara with several rods. I like each one for different reasons, but I wanted to see how they stack up against each other. So I compiled an experiment similar to Tenkara Bum’s Common Cents Database or Teton Tenkara’s Rod Flex Index. My intent was to compile test results that were simple and not dependent on the rod length for accurate results.</p>
                    <p class="mx-2 my-1">First I placed the rods at a fixed height of 71.75” I only braced the rods at the handle – to allow full rod flex. The rods had their own natural flex which I measured (and rounded to the nearest 1/4 of an inch). Next I attached a 20 gram weight to the lilian. My intent was determine the action of the rods when compared against each other. The lower the “Flex Percentage” number the stiffer the rod is; conversely the higher the “Flex Percentage” number is the softer the rod is. The list is organized from stiffest to softest.</p>
                    <img class="w-8/12 rounded-lg shadow-lg mx-auto" src="https://fallfish-tenkara-images.s3-us-west-1.amazonaws.com/FfT_Rod_Flex_Sketch.jpg" alt="Fallfish Tenkara Flex Percentage diagram" />

                    <p class="mx-2 ml-1 font-semibold">Crunching the Numbers</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">Two Piece Yamano Bamboo Rod</p>
                    <p class="mt-2 ml-4">✦ 262cm</p>
                    <p class="mt-2 ml-4">✦ Weight - 72 grams</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight - 6.25″</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 22.9%</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">Four Piece Yamano Bamboo Rod</p>
                    <p class="mt-2 ml-4">✦ 279cm</p>
                    <p class="mt-2 ml-4">✦ Weight - 151 grams</p>
                    <p class="mt-2 ml-4">✦ Natural Flex - 5.75″</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 23.9%</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">Patagonia Temple Fork Outfitters</p>
                    <p class="mt-2 ml-4">✦ 320cm</p>
                    <p class="mt-2 ml-4">✦ Weight - 72 grams</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight - 3.75″</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 24.26%</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">Tenkara Rod Co. Sawtooth</p>
                    <p class="mt-2 ml-4">✦ 360cm</p>
                    <p class="mt-2 ml-4">✦ Weight - 91 grams</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight - 6”</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 32.31%</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">万能超小継  流心 450H</p>
                    <p class="mt-2 ml-4">✦ 450cm</p>
                    <p class="mt-2 ml-4">✦ Weight - 160 grams</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight - 11.75″</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 32.50%</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">Dragontail Shadowfire</p>
                    <p class="mt-2 ml-4">✦ 360cm</p>
                    <p class="mt-2 ml-4">✦ Weight - 84 grams</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight - 5”</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 37.07%</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">Badger Tenkara WISCO</p>
                    <p class="mt-2 ml-4">✦ 412cm</p>
                    <p class="mt-2 ml-4">✦ Weight - 129 grams</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight - 6”</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 38.00%</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">Karasu 360 </p>
                    <p class="mt-2 ml-4">✦ 354cm</p>
                    <p class="mt-2 ml-4">✦ Weight - 80 grams</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight - 5.25″</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 39.25%</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">Badger Classic</p>
                    <p class="mt-2 ml-4">✦ 360cm</p>
                    <p class="mt-2 ml-4">✦ Weight - 91 grams</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight - 8”</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 40.39%</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">Tenryu Furaibo TF39TA</p>
                    <p class="mt-2 ml-4">✦ Weight - 76.9 grams</p>
                    <p class="ml-4">------</p>
                    <p class="mt-2 ml-4">✦ 324cm</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight 7.25”</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 41.1%</p>
                    <p class="ml-4">------</p>
                    <p class="mt-2 ml-4">✦ 350cm</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight 8.5”</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 37.55%</p>
                    <p class="ml-4">------</p>                    
                    <p class="mt-2 ml-4">✦ 373cm</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight ”</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 33.9%</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">Nissin ProSquare Mulch テンカラ II 360</p>
                    <p class="mt-2 ml-4">✦ 360cm</p>
                    <p class="mt-2 ml-4">✦ Weight - 61 grams</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight - 6.75″</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 41.54%</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">Tenkara USA Ito Zoom Rod</p>
                    <p class="mt-2 ml-4">✦ 390cm</p>
                    <p class="mt-2 ml-4">✦ Weight - 106 grams</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight - 6.75”</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 62.10%</p>
                    <p class="ml-4">------</p>
                    <p class="mt-2 ml-4">✦ Extended Length 445cm</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight  - 8.75”</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 58.50%</p>

                    <p class="mt-2 ml-2 font-semibold text-red-500">弦渓流 54 硬調 Hit Wave</p>
                    <p class="mt-2 ml-2 font-bold text-red-500">Gen-Keiryu 54 High Contrast Hit Wave</p>
                    <p class="mt-2 ml-4">✦ 540cm</p>
                    <p class="mt-2 ml-4">✦ Weight - 236 grams</p>
                    <p class="mt-2 ml-4">✦ Flex w/ 20 gram weight - 11.75”</p>
                    <p class="mt-2 ml-4">✦ Flex Percentage = 65.00%</p>
                </div>
            <Footer />
        </div>
    )
};

export default TenkaraRods