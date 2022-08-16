import React from 'react'

export default function Header(){
  return (
    <div>
       <img className='profile' src="../images/profileImage.png" alt="my profile" />

       <div className='sub-head'>
            <h1 className='name'>Michael Emmanuel</h1>
            <h3 className='title'>Frontend Developer</h3>
            <a className='resume' href="/images/myw3schoolsimage.jpg" download> <span><i class="fa-solid fa-angle-down"></i></span> My Resume</a>
       
        </div>
    </div>
  )
}
