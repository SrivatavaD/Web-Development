import React from 'react'
import devpic from '../assets/devpic.jpg'
import '../styles/UserCard.css'

const UserCard = () => {
  return (
    <div className='user-container'>
        <p id='titlte'>Devansh</p>
        <img id='user-img'src={devpic} alt='Devansh'></img>
        <p id='user-desc'>Description of Devansh</p>
      
    </div>
  )
}

export default UserCard
