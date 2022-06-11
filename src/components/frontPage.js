import React from "react"
import { Link } from "gatsby"

const FrontPage = () => {
    return (
      <div class="px-4 py-16 mx-auto heropattern-bamboo-gray-400 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div class="bg-gray-200 overflow-hidden rounded text-gray-700 hover:text-red-500">
            <a href="/fishing-in-hokkaido" aria-label="Article">
              <img
                src="https://fallfish-tenkara-images.s3.us-west-1.amazonaws.com/FfT+-+Hokkaido_Fly_Fishing/hokkaido-fly+fishing-tenkara-adventure-bears-japan-epic+colors.jpg"
                class="object-cover w-full h-64 rounded"
                alt="epic fall colors"
              />
            </a>
            <div class="py-5">
              <p class="mb-2 ml-2 text-xs font-semibold uppercase">
                21 January 2022
              </p>
              <a
                href="/fishing-in-hokkaido"
                aria-label="Article"
                class="inline-block mb-3"
              >
                <p class="ml-4 text-2xl font-bold leading-5">Fishing in Hokkaido</p>
              </a>
              <p class="italic text-sm mx-4 mb-4">
              We brave the bears and find a fishing paradise in the heart of Japan's second largest island...
              </p>
            </div>
          </div>
          
          <div class="bg-gray-200 overflow-hidden rounded text-gray-700 hover:text-red-500">
            <a href="/big-fish-tochigi" aria-label="Article">
              <img
                src="https://fallfish-tenkara-images.s3.us-west-1.amazonaws.com/FfT+-+Big_Fish_Tochigi_Houki/tochigi-tenkara-fly+fishing-houki-big+fish-clouds.jpg"
                class="object-cover w-full h-64 rounded"
                alt="clouds over Tochigi"
              />
            </a>
            <div class="py-5">
              <p class="mb-2 ml-2 text-xs font-semibold uppercase">
                19 January 2022
              </p>
              <a
                href="/big-fish-tochigi"
                aria-label="Article"
                class="inline-block mb-3"
              >
                <p class="ml-4 text-2xl font-bold leading-5">Finding big fish...</p>
              </a>
              <p class="italic text-sm mx-4 mb-4">After getting nearly skunked our hopes for some fish action were suddenly piqued upon laying eyes on this glorious river...</p>
            </div>
          </div>
          
          <div class="bg-gray-200 overflow-hidden rounded text-gray-700 hover:text-red-500">
            <a href="/kamoshika-backyard" aria-label="Article">
              <img
                src="https://fallfish-tenkara-images.s3-us-west-1.amazonaws.com/FfT+-+Shems+Jud+/tanzawa+mountains-japan-tenkara-fishing-business+trip-exploring-guest+blog+post-kamoshika.JPG"
                class="object-cover w-full h-64 rounded"
                alt="Waterfall"
              />
            </a>
            <div class="py-5">
              <p class="mb-2 ml-2 text-xs font-semibold uppercase">
                04 April 2019
              </p>
              <a
                href="/kamoshika-backyard"
                aria-label="Article"
                class="inline-block mb-3"
              >
                <p class="ml-4 text-2xl font-bold leading-5">Kamoshika's Backyard</p>
              </a>
              <p class="italic text-sm mx-4 mb-4">
              I have been enchanted with Japanese trout and char since a stint teaching English 
              in Japan some twenty years ago...
              </p>
            </div>
          </div>         
        </div>

        <div class="flex flex-wrap w-full justify-between">
            <Link 
              to={`/blog`}
              class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-gray-800 hover:bg-gray-300 hover:text-black"
            ><span role="img" aria-label="map of japan">&#128510;</span> Read more blog posts...</Link>
            <Link 
              to={`/search`}
              class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-gray-800 hover:bg-gray-300 hover:text-black"
            ><span role="img" aria-label="right leaning magnifying glass">&#128270;</span> Search the archives...</Link>
        </div>

      </div>
    );
  };

  export default FrontPage
