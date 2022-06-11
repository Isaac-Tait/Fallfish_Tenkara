require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const BlogQuery = `
  {
    allMarkdownRemark {
      nodes {
        id
        excerpt
        frontmatter {
          description
          tags
          title
        }
        fields {
          slug
        }
        html
      }
    }
  }
`

const queries = [
  {
    query: BlogQuery,
    transformer: ({ data }) => data.allMarkdownRemark.nodes, }
];
//Update:
module.exports = {
  siteMetadata: {
    title: `Fallfish Tenkara`,
    author: {
      name: `Isaac Tait`,
      summary: `who now lives in New England but dreams of returning, one day, to Japan.`,
    },
    description: `Exploring Japan One River At A Time`,
    siteUrl: `https://fallfishtenkara.com`,
    social: {
      twitter: `Isaac_Tait_83`,
    },
    linkOne: 'Japanese 日本語',
    linkTwo: 'Tenkara Shops',
    linkThree: 'Keiryu Fishing Season',
    linkFour: 'Fishing License',
    linkFive: 'Toll Roads',
    linkSix: 'Links',
    linkSeven: 'About',
    linkEight: 'Tenkara 101',
    linkNine: 'Tags',
    linkTen: 'Thank You',
    linkEleven: 'Search',

      menuLinks: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "Japanese 日本語",
          link: "/learning-japanese",
        },
        {
          name: "Tenkara Shops",
          link: "/tenkara-fishing-stores",
        },
        {
          name: "Keiryu Fishing Season",
          link: "/keiryu-fishing-season",
        },
        {
          name: "Fishing License",
          link: "/japanese-fishing-license",
        },
        {
          name: "Toll Roads",
          link: "/toll-roads",
        },
        {
          name: "Links",
          link: "/links",
        },
        {
          name: "About",
          link: "/about"
        },
        {
          name: "Tenkara 101",
          link: "/tenkara-101"
        },
        {
          name: "Prefectures",
          link: "/tags",
        },
        {
          name: "Thank You",
          link: "/thank-you",
        },
        {
          name: "Search",
          link: "/search",
        },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fallfish Tenkara`,
        start_url: `/`,
        icon: `content/assets/FfT_Logo_Thumbnail.png`
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fallfish Tenkara`,
        start_url: `/`,
        icon: `content/assets/FfT_Logo_Thumbnail.png`
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fallfish Tenkara`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/FfT_Logo_Thumbnail.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
    resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ],
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
