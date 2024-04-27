import React from 'react'
import "./Brand.css"
import {google,shopify,slack,dropbox,atlassian} from "./imports"
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt3__brand-content'>
        <img src={google} alt='google image1'/>
        <img src={shopify} alt='shopify image2'/>
        <img src={slack} alt='slack image3'/>
        <img src={dropbox} alt='dropbox image4'/>
        <img src={atlassian} alt='atlassian image5'/>
      </div>
    </div>
  )
}

export default Brand