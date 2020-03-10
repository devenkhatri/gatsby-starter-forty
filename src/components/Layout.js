import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        const { children } = this.props

        const { data } = this.props;

        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <div id="wrapper">
                    <Header data={data.file.childMarkdownRemark.frontmatter} onToggleMenu={this.handleToggleMenu} />
                    {children}
                    <Contact data={data.file.childMarkdownRemark.frontmatter.contact} />
                    <Footer data={data.file.childMarkdownRemark.frontmatter.footer} />
                </div>
                <Menu data={data.file.childMarkdownRemark.frontmatter.menu} onToggleMenu={this.handleToggleMenu} />
            </div>
        )
    }
}

//export default Layout

export default props => (
    <StaticQuery
      query={graphql`
        query {
            file(sourceInstanceName: {eq: "settings"}, relativePath: {eq: "general.md"}) {
            childMarkdownRemark {
                frontmatter {
                title
                subtitle
                menu {
                    text
                    url
                }
                contact {
                    address
                    email
                    phone
                }
                footer {
                    copyright
                    socialicons {
                    iconclass
                    iconurl
                    }
                }
                }
            }
            }
        }
      
      `}
      render={data => <Layout data={data} {...props}/>}
    />
  )