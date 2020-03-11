import React from 'react'

const Banner = props => {
  let styleName = 'style' + Math.floor(Math.random() * 6 + 1)
  const heading =
    props && props.data && props.data.heading ? props.data.heading : 'Heading'
  const subheading =
    props && props.data && props.data.subheading
      ? props.data.subheading
      : 'Short Description...'
  return (
    <section id="banner" className="major">
      <div className="inner">
        <header className="major">
          <h1>{heading}</h1>
        </header>
        <div className="content">
          <p>{subheading}</p>
          <ul className="actions">
            <li>
              <a href="#one" className="button next scrolly">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Banner
