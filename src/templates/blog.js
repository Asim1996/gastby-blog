import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { MARKS } from "@contentful/rich-text-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "../components/layout"
import Head from "../components/head"
// import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import Disqus from 'disqus-react'
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      description
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
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const disqusConfig = {
    url: `https://404found.tech/${props.data.contentfulBlogPost.slug}`,
    identifier: `${props.data.contentfulBlogPost.slug}`,
    title: props.data.contentfulBlogPost.title,
  }

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    },
    renderMark: {
      [MARKS.CODE]: (text) => {
        return (
          <SyntaxHighlighter
            language="javascript"
            style={monokai}
          >
            {text}
          </SyntaxHighlighter>
        );
      }
    }
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} description={props.data.contentfulBlogPost.description} />
      <div className="blog-post-container">
        <article className="post">
          <div className="post-thumbnail" style={{ backgroundImage: `url(${props.data.contentfulBlogPost.backgroundImage.file.url})` }}>
            <h1 className="post-title">{props.data.contentfulBlogPost.title}</h1>
            <div className="post-meta">{props.data.contentfulBlogPost.publishedDate}</div>
          </div>
          <div className="blog-post-content">
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          </div>
        </article>
        <Disqus.DiscussionEmbed shortname="404found-tech" config={disqusConfig} />
      </div>
    </Layout>
  )
}

export default Blog

