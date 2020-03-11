import React from 'react'

const BannerLanding = (props) => {
    let styleName = "style"+(Math.floor(Math.random()*6+1))
  return (
    <section id="banner" className={styleName}>
      <div className="inner">
        <header className="major">
          <h1>{props.data.title}</h1>
        </header>
        <div className="content">
          <p>{props.data.excerpt}</p>
        </div>
      </div>
    </section>
  )
}
export default BannerLanding
