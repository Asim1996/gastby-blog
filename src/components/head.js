import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title, description }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <Helmet>
        <title>{title} | {data.site.siteMetadata.title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="JavaScript, Node, React, AWS, System Design" />
         <meta name="og:title" property="og:title" content="Articles on Javascript, Node, React and Aws" />
        <link rel="canonical" href="https://404found.tech/" />
      </Helmet>
    )
}

export default Head