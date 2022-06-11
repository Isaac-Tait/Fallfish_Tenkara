import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata {
                title
                linkOne
                linkTwo
                linkThree
                linkFour
                linkFive
                linkSix
                linkSeven
                linkEight
                linkNine
                linkEleven
                    menuLinks {
                        link
                        name
                    }
                }
            }
        }
    `)

    const linkOne = data.site.siteMetadata.linkOne 
    const linkTwo = data.site.siteMetadata.linkTwo
    const linkThree = data.site.siteMetadata.linkThree
    const linkFour = data.site.siteMetadata.linkFour
    const linkFive = data.site.siteMetadata.linkFive
    const linkSix = data.site.siteMetadata.linkSix
    const linkSeven = data.site.siteMetadata.linkSeven
    const linkEight = data.site.siteMetadata.linkEight
    const linkNine = data.site.siteMetadata.linkNine
    const linkEleven = data.site.siteMetadata.linkEleven

    return (
      <div class="px-4 py-5">
        <div class="relative">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200"
              onClick={() => setIsMenuOpen(true)}
            >
                <svg class="h-6 w-6 bg-red-500 rounded-md" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z" 
                        fill="#ffffff"
                    />
                    <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z" 
                        fill="#ffffff"
                    />
                    <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M3 15C3 14.4477 3.44772 14 4 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15Z" 
                        fill="#ffffff"
                    />
                </svg>  
            </button>
            {isMenuOpen && (
              <div class="relative top-0 left-0 divide-y divide-gray-400">
                <div class="p-8 h-screen lg:h-32 bg-red-500 rounded shadow-xl">
                  <div class="flex items-center justify-between lg:mb-4">
                    <div>
                        <span class="mr-2 text-xl font-bold tracking-wide text-white uppercase">
                          Information
                        </span>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-white focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-white hover:text-red-500" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav class="absolute">
                    <ul class="block lg:flex">
                        <li>
                            <span class="text-white mx-auto tracking-wide hover:text-red-500 hover:bg-white rounded text-xs lg:text-lg ml-2 mr-2">
                                <Link to="/learning-japanese">{linkOne}</Link>
                            </span> 
                        </li>        

                        <li>
                            <span class="text-white mx-auto tracking-wide hover:text-red-500 hover:bg-white rounded text-xs lg:text-lg ml-2 mr-2">
                                <Link to="/tenkara-fishing-stores">{linkTwo}</Link>
                            </span>
                        </li>

                        <li>
                            <span class="text-white mx-auto tracking-wide hover:text-red-500 hover:bg-white rounded text-xs lg:text-lg ml-2 mr-2">
                                <Link to="/keiryu-fishing-season">{linkThree}</Link>
                            </span>
                        </li>

                        <li>
                            <span class="text-white mx-auto tracking-wide hover:text-red-500 hover:bg-white rounded text-xs lg:text-lg ml-2 mr-2">
                                <Link to="/fishing-license">{linkFour}</Link>
                            </span>
                        </li>

                        <li>
                            <span class="text-white mx-auto tracking-wide hover:text-red-500 hover:bg-white rounded text-xs lg:text-lg ml-2 mr-2">
                                <Link to="/toll-roads">{linkFive}</Link>
                            </span>
                        </li>

                        <li>
                            <span class="text-white mx-auto tracking-wide hover:text-red-500 hover:bg-white rounded text-xs lg:text-lg ml-2 mr-2">
                                <Link to="/links">{linkSix}</Link>
                            </span>
                        </li>

                        <li>
                            <span class="text-white mx-auto tracking-wide hover:text-red-500 hover:bg-white rounded text-xs lg:text-lg ml-2 mr-2">
                                <Link to="/about">{linkSeven}</Link>
                            </span>
                        </li>

                        <li>
                            <span class="text-white mx-auto tracking-wide hover:text-red-500 hover:bg-white rounded text-xs lg:text-lg ml-2 mr-2">
                                <Link to="/tenkara-101">{linkEight}</Link>  
                            </span>
                        </li>

                        <li>
                            <span class="text-white mx-auto tracking-wide hover:text-red-500 hover:bg-white rounded text-xs lg:text-lg ml-2 mr-2">
                                <Link to="/tags">{linkNine}</Link>
                            </span>
                        </li>
                        <li>
                            <span class="text-white tracking-wide hover:text-red-500 hover:bg-white rounded text-xs lg:text-lg ml-2 mr-2">
                                <Link to="/search"><span role="img" aria-label="magnifying glass">{linkEleven}&nbsp;&#128270;</span></Link>
                            </span> 
                        </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
    )
  };

  export default Navigation