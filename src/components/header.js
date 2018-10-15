import React, { Component } from 'react'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands'

library.add(faGithub, faLinkedin)

const navbarLinks = [
  { title: 'Home', link: '/' },
  { title: 'Projects', link: '/projects' },
  { title: 'Stack', link: '/stack' },
]

const socialMedias = [
  { icon: 'github', link: 'https://github.com/alcidesrafael' },
  { icon: 'linkedin', link: 'https://www.linkedin.com/in/rafaelalcides/' },
]

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMenuOpen: false,
    }
  }

  handleMenu = () => {
    this.setState(previousState => ({
      isMenuOpen: !previousState.isMenuOpen,
    }))
  }

  render = () => {
    const { isMenuOpen } = this.state
    const burgerClass = isMenuOpen ? 'is-active' : ''

    return (
      <nav
        className="navbar has-shadow is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item is-size-3 has-text-weight-bold" to="/">
              welcome.
            </Link>

            <button
              className={`navbar-burger ${burgerClass}`}
              type="button"
              aria-label="menu"
              onClick={this.handleMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <div className={`navbar-menu ${burgerClass}`}>
            <div className="navbar-end">
              {navbarLinks.map(navbarLink => (
                <Link
                  to={navbarLink.link}
                  key={navbarLink.title}
                  className="navbar-item is-size-5"
                >
                  {navbarLink.title}
                </Link>
              ))}
              {socialMedias.map(socialMedia => (
                <a
                  href={socialMedia.link}
                  key={socialMedia.icon}
                  aria-label={socialMedia.icon}
                >
                  <span className="icon is-large">
                    <FontAwesomeIcon
                      className="fab fa-lg"
                      icon={['fab', socialMedia.icon]}
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
