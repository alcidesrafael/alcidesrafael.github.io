import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const StackPage = () => (
  <Layout>
    <Helmet>
      <script
        async
        src="https://cdn1.stackshare.io/javascripts/client-code.js"
        charset="utf-8"
      />
    </Helmet>
    <section className="section is-size-5-desktop is-size-6-touch">
      <div className="container">
        <h1 className="title has-text-centered">Stack</h1>
        <p className="content has-text-centered">
          Here is my stack, shared from StackShare.
          <br /> See some technologies that I have experience:
        </p>
        <div className="columns is-centered projects">
          <div className="column is-half has-text-centered">
            <a
              frameborder="0"
              data-theme="light"
              data-layers="1,2,3,4"
              data-stack-embed="true"
              href="https://embed.stackshare.io/stacks/embed/51a18fb8e93c1e61aa6edd33538c4f"
            >
              StackShare
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default StackPage
