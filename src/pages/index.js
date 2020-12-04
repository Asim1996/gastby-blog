import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/card'



const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
      allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
          edges {
              node {
                  title
                  slug
                  publishedDate(formatString:"MMMM Do, YYYY")
                  description
                  tags
                  backgroundImage{
                    title
                    fluid(maxWidth: 300, maxHeight:200) {
                      ...GatsbyContentfulFluid
                    }
                    file{
                      url
                      fileName
                      contentType
                    }
                  }
                  
              }
          }
      }
  }
`)
 
  return (
    <Layout>
      <h2>Latest Articles &darr;</h2>
      <div className="grids">
        {data && data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <Card key={edge.node.id} blog={edge.node} />
          )
        })
        }
      </div>
    </Layout>
  )
}

export default IndexPage;