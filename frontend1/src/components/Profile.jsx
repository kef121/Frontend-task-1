import React from 'react'
import Share from '../assets/Avatar-share.png'
import Profileimg from '../assets/profile-img.png'
import "./styles.css";


const Profile = () => {
  return (
    <section id='profile'>
        <img id="share" alt="share" src={Share}></img>
        <img id="profile_img" alt="Profile_img" src={Profileimg}></img>
        <h6 id="twitter">Keffy21</h6>
        <h6 id="slack">Favour Okeke</h6>
    </section>
  )
}

export default Profile