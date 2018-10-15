import React from 'react'

const Card = ({ title, subtitle, link, imageLink, tags }) => (
  <a href={link}>
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-96x96">
              <img src={imageLink} alt={title} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-size-5-desktop is-size-6-touch">{title}</p>
            <p className="subtitle is-size-5-desktop is-size-6-touch">
              {subtitle}
            </p>
            <div className="tags">
              {tags.map(tag => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
)

export default Card
