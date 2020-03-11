import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import SEO from '../components/SEO'

class HomeIndex extends React.Component {
    render() {

        const node = this.props.data.file;

        return (
            <Layout>
                <SEO title="Homepage" />

                <Banner data={node.childMarkdownRemark.frontmatter.banner} />

                <div id="main">
                    <section id="one" className="tiles">
                        {node.childMarkdownRemark.frontmatter.banner &&
                            node.childMarkdownRemark.frontmatter.services.map(( item ) => (
                                <article style={{ backgroundImage: `url(${item.image})` }}>
                                    <header className="major">
                                        <h3>{item.heading}</h3>
                                        <p>{item.subheading}</p>
                                    </header>
                                    <Link to={item.linkurl} className="link primary"></Link>
                                </article>
                            ))}
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>{node.childMarkdownRemark.frontmatter.intro.heading}</h2>
                            </header>
                            <p>{node.childMarkdownRemark.frontmatter.intro.description}</p>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    file(sourceInstanceName: {eq: "fixedpage"}, relativePath: {eq: "index.md"}, relativeDirectory: {eq: ""}) {    
          childMarkdownRemark {
            frontmatter {
                banner {
                    bgimage
                    heading
                    subheading
                  }
                  intro {
                    description
                    heading
                  }
                  services {
                    heading
                    subheading
                    image
                    linktext
                    linkurl
                  }
            }
          }
        }
  } 
`