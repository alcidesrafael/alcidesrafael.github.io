import React from 'react'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands'

import Layout from '../components/layout'
import profileImage from '../assets/profile.jpeg'

library.add(faGithub, faLinkedin)

const socialMedias = [
  { icon: 'github', link: 'https://github.com/alcidesrafael' },
  { icon: 'linkedin', link: 'https://www.linkedin.com/in/rafaelalcides/' },
]

const IndexPage = () => (
  <Layout>
    <div className="container">
      <figure className="photo image is-128x128">
        <img src={profileImage} alt="Rafael Alcides" className="is-rounded" />
      </figure>
      <h1 className="title has-text-centered">Rafael Alcides</h1>
      <h2 className="subtitle has-text-centered">FullStack Developer</h2>
    </div>
    <div className="has-text-centered">
      {socialMedias.map(socialMedia => (
        <a
          href={socialMedia.link}
          key={socialMedia.icon}
          aria-label={socialMedia.icon}
        >
          <span className="icon is-large">
            <FontAwesomeIcon
              className="fab fa-2x"
              icon={['fab', socialMedia.icon]}
            />
          </span>
        </a>
      ))}
    </div>
    <section className="section is-size-4 is-size-5-touch">
      <div className="container content has-text-centered">
        <h4 className="title">
          Nice to meet you.{' '}
          <span role="img" aria-label="hand wave">
            👋
          </span>
        </h4>
        <p>
          My name is <strong>Rafael Alcides</strong>
          <br />
          and this is my personal website.
        </p>
        <p>
          Check out my <Link to="/projects">Projects</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
