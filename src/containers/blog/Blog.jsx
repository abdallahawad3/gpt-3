import React from 'react'
import "./Blog.css"
import { blog01,blog02,blog03,blog04,blog05 } from "../../components/index" 
import BlogComponent from '../../components/BlogComponent/BlogComponent';

const blogData = [
  // {title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",text:"Sep 26, 2021",img:blog01},
  {title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",text:"Sep 26, 2021",img:blog05},
  {title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",text:"Sep 26, 2021",img:blog02},
  {title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",text:"Sep 26, 2021",img:blog03},
  {title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",text:"Sep 26, 2021",img:blog03},
  {title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",text:"Sep 26, 2021",img:blog04},
  {title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",text:"Sep 26, 2021",img:blog05},
];

const blogList =  blogData.map((e,index)=>{
  return <BlogComponent key={index} title={e.title} text={e.text} img={e.img}/>
})

const Blog = () => {
  return (
    <div className='blog-content section__padding section__margin'>
      <div className='blog-header'>
        <h1 className='gradient__text '>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='blog-container'>
        {blogList}
      </div>
    </div>
  )
}

export default Blog;