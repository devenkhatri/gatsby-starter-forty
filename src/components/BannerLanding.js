import React from 'react'

const BannerLanding = props => {
  let styleName = 'style' + Math.floor(Math.random() * 6 + 1)
  const title =
    props && props.data && props.data.title ? props.data.title : 'Heading'
  const excerpt =
    props && props.data && props.data.excerpt
      ? props.data.excerpt
      : 'Short Description...'
  return (
    <section id="banner" className={styleName}>
      <div className="inner">
        <header className="major">
          <h1>{title}</h1>
        </header>
        <div className="content">
          <p>{excerpt}</p>
        </div>
      </div>
    </section>
  )
}
export default BannerLanding
