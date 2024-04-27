import React from 'react'
import ai from "../../assets/ai.png"
import people from "../../assets/people.png"
import "./Header.css"
const Header = () => {
  return (
    <div id="home" className='gpt3__header section__padding'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all 
            exercise blessing. Indulgence way everything joy alteration boisterous the attachment. 
            Party we years to order allow asked of.
          </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button' className='main-btn'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people div'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className='gpt3__header-image'>
        <img src={ai} alt="This is Ai Img" />
      </div>
    </div>
  )
}

export default Header;