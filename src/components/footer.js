import React from "react"

const Footer = () => {
    return (
        <div class="bg-red-500">
            <footer class="text-gray-800 text-tiny md:text-base flex items-center justify-between">
                <div class="ml-2">
                    <p>© 2014 - {new Date().getFullYear()}, Built with&nbsp;
                        <a href="https://www.gatsbyjs.org" class="text-gray-700 hover:text-blue-500" target="_blank" rel="noopener noreferrer">Gatsby</a> &&nbsp;
                        <a  href="https://tailwindcss.com" class="text-gray-700 hover:text-blue-500" target="_blank" rel="noopener noreferrer">TailwindCSS</a>.
                    </p>
                </div>
                <div class="mr-2">
                    <p>A&nbsp;
                        <a href="https://mountaintopcoding.dev"class="font-mono text-gray-700 hover:text-blue-500" target="_blank" rel="noopener noreferrer">mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a> project
                    </p>
                </div>   
            </footer>
        </div>
    )
}

export default Footer

