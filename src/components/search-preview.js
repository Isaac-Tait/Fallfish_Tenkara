import React from "react"

import { Link } from "gatsby"

import { Highlight } from "react-instantsearch-dom";

const SearchPreview = ({ hit }) => {
    return (
        <div>
            <div className='font-semibold text-slate-600'>
                <Link to={hit.fields.slug}>
                    <Highlight hit={hit} attribute="frontmatter.title" tagName="mark" />
                </Link>
            </div>

            <div class='italic text-slate-400 ml-2 text-sm'>
                <Highlight hit={hit} attribute="frontmatter.description" tagName="mark" />
            </div>
        </div>
    )
};

export default SearchPreview