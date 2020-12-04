import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image';

const Card = ({ blog }) => {
  const tags = blog && blog.tags.split(",");
  return (
    <article className="card">
      <Link to={`/blog/${blog.slug}`} className="post-link">
        <Img
          fluid={blog.backgroundImage.fluid}
          key={blog.backgroundImage.fluid.src}
          alt={blog.backgroundImage.title}

        />
      </Link>
      <header>
        <h2 className="post-title">
          <Link to={`/blog/${blog.slug}`} className="post-link">
            {blog.title}
          </Link>
        </h2>
        {tags && tags.map((tag) => <span class="tag">{tag}</span>)}
        <div className="post-description">{blog.description}</div>
        <div className="post-meta">{blog.publishedDate}</div>
      </header>
    </article>
  )
}
export default Card