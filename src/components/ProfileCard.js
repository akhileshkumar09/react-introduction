import React from 'react'

const ProfileCard = (props) => {
  return (
    <div className='profileCard'>
    <h2 className='text'>ProfileCard</h2>
    <h1 className='text'>{props.Name}</h1>
    <h3 className='text '>{props.age}</h3>
    <p className='text'>{props.bio}</p>
    </div>
  )
}

export default ProfileCard