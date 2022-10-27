import React from 'react'
import Slack from '../assets/slack.png'
import Github from '../assets/Github.png'
import "./styles.css";

const Links = () => {
  return (
    <section id="links">
        
        <div id="links-section">
            <a id="twitter__link" href='https://twitter.com/keffy21'>Twitter Link</a>
            <a id="btn__zuri" href='https://training.zuri.team/'>Zuri Team</a>
            <a id="books"  href='https://books.zuri.team'>Zuri Books</a>
            <a id="books__python" href='https://books.zuri.team/python-for-beginners?ref_id=Favour-Okeke'>Python Books</a>
            <a id="pitch" href='https://background.zuri.team'>Background Check for Coders</a>
            <a id="book__design" href='https://books.zuri.team/design-rules'>Design Books</a>
        </div>

        <div id='socials'>
            <a href="Favour-Okeke" ><img id="slack-icon" alt="slack" src={Slack}></img></a>
            <a href='https://github.com/kef121'><img id="github-icon" alt="github" src={Github}></img></a>
        </div>

    </section>
  )
}

export default Links