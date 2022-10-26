import React from 'react'
import Slack from '../assets/slack.png'
import Github from '../assets/Github.png'
import "./styles.css";

const Links = () => {
  return (
    <section id="links">
        
        <button id="twitter__link"><a href='https://twitter.com/keffy21'>Twitter Link</a></button>
        <button id="btn__zuri"><a href='https://training.zuri.team/'>Zuri Team</a></button>
        <button id="books"><a href='https://books.zuri.team'>Zuri Books</a></button>
        <button id="books__python"><a href='https://books.zuri.team/'>Python Books</a></button>
        <button id="pitch"><a href='https://background.zuri.team'>Background Check for Coders</a></button>
        <button id="book__design"><a href='https://books.zuri.team/design-rules'>Design Books</a></button>

        <div id='socials'>
            <a href="#" ><img id="slack-icon" alt="slack" src={Slack}></img></a>
            <a href='https://github.com/kef121'><img id="github-icon" alt="github" src={Github}></img></a>
        </div>

    </section>
  )
}

export default Links