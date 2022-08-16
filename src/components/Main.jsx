import React from 'react'

export default function Main() {
  return (
    <div className='main-container'>
       
        <div className='portfolio-container'>
            <p className='email'>
              <a href='#'><span><i class="fa-solid fa-envelope"></i></span></a>
              Email
            </p>
            <p className='linkedin'>
              <a href='https://www.linkedin.com/in/michael-emmanuel-3884731a1/'><span>
                <i class="fa-brands fa-linkedin-in"></i></span></a>
              Linkedin
            </p>
        </div>
        <div >
          <div className='about'>
              <h2>About</h2>
              <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          </div>
          <div className='interest'>
              <h2>Interests</h2>
              <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
        </div>
    </div>
  )
}
