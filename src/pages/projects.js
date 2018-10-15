import React from 'react'

import Layout from '../components/layout'
import Card from '../components/card'
import Venue from '../assets/venue.jpg'
import Pizzeria from '../assets/lapizzeria.png'
import TodoAPI from '../assets/todoapi.jpg'

const projectCards = [
  {
    title: 'The Venue - Musical Events',
    subtitle: 'Fictional hotsite for a musical event',
    link: 'https://venue.surge.sh',
    imageLink: Venue,
    tags: ['React', 'SPA', 'MaterialUI'],
  },
  {
    title: 'To-Do RESTful API',
    subtitle: 'A RESTful API for a to-do list',
    link: '#',
    imageLink: TodoAPI,
    tags: ['Node', 'Express', 'API'],
  },
  {
    title: 'La Pizzeria',
    subtitle: 'Website and system for a pizza delivery',
    link: 'http://bearly.co/portfolio/lapizzeria',
    imageLink: Pizzeria,
    tags: ['Webdesign', 'UI/UX', 'PHP', 'FullStack'],
  },
]

const ProjectsPage = () => (
  <Layout>
    <section className="section is-size-5-desktop is-size-6-touch">
      <div className="container">
        <h1 className="title has-text-centered">Projects</h1>
        <p className="content has-text-centered">
          See some projects below, get more details in my{' '}
          <a href="https://github.com/alcidesrafael">GitHub Page.</a>
        </p>
        <div className="columns is-centered projects">
          <div className="column is-half">
            {projectCards.map(projectCard => (
              <Card key={projectCard.title} {...projectCard} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ProjectsPage
