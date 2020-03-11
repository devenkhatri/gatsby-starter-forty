import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import RenderMarkdownAsHTML from '../components/RenderMarkdownAsHTML'
import BannerLanding from '../components/BannerLanding'
import SEO from '../components/SEO'

const ServicePage = ({ data }) => {
  const node = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={node.title} />
      <BannerLanding data={node} />
      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>{node.title}</h2>
            </header>
            <p><RenderMarkdownAsHTML content={node.description} /></p>
          </div>
        </section>
        <section id="two" className="spotlights">
          {node.sections &&
            node.sections.map(service => (
              <section>
                <Link to="/generic" className="image">
                  <img src={service.image} alt="" />
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>{service.title}</h3>
                    </header>
                    <p><RenderMarkdownAsHTML content={service.description} /></p>
                  </div>
                </div>
              </section>
            ))}
        </section>
      </div>
    </Layout>
  )
}

export default ServicePage

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        description
        image
        excerpt
        sections {
          title
          image
          description
        }
      }
    }
  }
`
