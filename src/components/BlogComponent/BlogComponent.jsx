import React from 'react'
import "./BlogComponent.css"

const BlogComponent = ({title,text,img}) => {
  return (
    <div className='blog-card'>
      <div className='blog-image'>
        <img src={img} alt="blog one" />
      </div>
      <div className='blog-card-content'>
        <p>
          {text}
          {/* text */}
        </p>
        <h2>
          {title}
          {/* Title */}
        </h2>
        <a href='.'>Read Full Article</a>
      </div>
    </div>
  )
}

export default BlogComponent;