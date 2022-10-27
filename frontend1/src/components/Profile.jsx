import React from 'react'
import Share from '../assets/share.png'
import Sharemo from '../assets/share-mobile.png'
import Profileimg from '../assets/profile-img.png'
import "./styles.css";


const Profile = () => {
  return (
    <section id='profile'>
        <img id="share" alt="share" src={Share}></img>
        <img id="sharemo" alt="share" src={Sharemo}></img>
        <img id="profile__img" alt="Profile_img" src={Profileimg}></img>
        <h6 id="twitter">Keffy21</h6>
        <h6 id="slack">Favour Okeke</h6>
    </section>
  )
}

export default Profile