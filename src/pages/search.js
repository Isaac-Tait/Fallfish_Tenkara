import React from "react";
import { graphql } from "gatsby"

import algoliasearch from 'algoliasearch/lite';
import { 
    InstantSearch, 
    SearchBox, 
    Hits 
} from 'react-instantsearch-dom';

import Seo from "../components/seo";
import Layout from "../components/layout"
import SearchPreview from "../components/search-preview";

const searchClient = algoliasearch(
    'BJ28ZE2PI2', 
    'e4f69a18daf130206dad5fc040b7d4b5'
);

class Search extends React.Component {
    render() {
        const { data } = this.props;
        const siteTitle = data.site.siteMetadata.title;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <Seo 
                    title="All Posts"
                    keywords={[`tenkara`,`japan`,`fly fishing`,`sawanobori`,]}
                />
                <div class="max-w-6xl h-screen flex flex-col mx-auto overflow-y-scroll my-2">
                    <InstantSearch searchClient={searchClient} indexName="Fallfish_Tenkara_Blog">
                        <div class="flex justify-center content-center bg-orange-100">
                            <p className='font-semibold'>Enter your search query below:</p>
                            <SearchBox />
                        </div>
                        <div className=''>
                            <Hits hitComponent={SearchPreview}/>
                        </div>
                    </InstantSearch>
                </div>
            </Layout>
        )
    }
};

export default Search

export const PageQuery = graphql`
  query {
        site {
        siteMetadata {
        title
        }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
        node {
            fields {
            slug
            }
            frontmatter {
            date(formatString: "MMMM DD YYYY")
            title
            description
            }
          }
       }
    }
  }
`
