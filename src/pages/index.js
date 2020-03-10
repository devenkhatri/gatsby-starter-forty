import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        const node = this.props.data.allFile.edges[0].node;

        console.log(node)

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

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
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
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
    allFile(filter: {sourceInstanceName: {eq: "fixedpage"}, relativePath: {eq: "index.md"}, relativeDirectory: {eq: ""}}) {
      edges {
        node {
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
    }
  }
  
`