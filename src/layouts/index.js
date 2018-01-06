import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import video from '../img/lights.mp4'

console.log(video)


// import './index.css'

const Video = () => (
  <video
    className="videoTag"
    autoPlay
    loop
    muted
    style={{
      minWidth: "100%",
      position: "fixed",
      right: 0,
      bottom: 0,
      zIndex: -1
    }}
  >
    <source src={video} type="video/mp4" />
  </video>
);

const Header = () => (
    <div
      className="content"
      style={{
        
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        width: '100%',
        padding: '20px',
      }}
    >
      <h1 style={{color: 'white'}}>Heading</h1>
      <p>Lorem ipsum...</p>
    </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Video />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
