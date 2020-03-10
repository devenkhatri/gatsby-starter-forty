const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
        allFile(filter: {sourceInstanceName: {in: ["service", "autopage"]}}) {
            edges {
                node {
                    name
                    sourceInstanceName
                    childMarkdownRemark {
                        id
                        frontmatter {
                            templateKey
                        }
                    }
                }
            }
        }
    }
  `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    //auto generation of services and autopages
    result.data.allFile.edges.forEach(({ node }) => {
        let pagepath = node.name;
        if(node.sourceInstanceName=="service") pagepath = "/"+node.sourceInstanceName+"/"+node.name;
        createPage({
            path: pagepath, 
            component: path.resolve(`src/templates/${String(node.childMarkdownRemark.frontmatter.templateKey)}.js`),
            context: {
                id: node.childMarkdownRemark.id,
            }, // additional data can be passed via context
        })
    })
}