import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import RenderMarkdownAsHTML from '../components/RenderMarkdownAsHTML'

import pic11 from '../assets/images/pic11.jpg'

const GenericPage = ({ data }) => {

    return (
        <Layout>
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>{data.markdownRemark.frontmatter.title}</h1>
                        </header>
                        <span className="image main"><img src={data.markdownRemark.frontmatter.image} alt="" /></span>
                        <RenderMarkdownAsHTML className="blog-post-content" content={data.markdownRemark.html} />
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default GenericPage

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`