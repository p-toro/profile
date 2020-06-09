import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulSns(sort: {fields: snsOrder, order: ASC}) {
        edges {
          node {
            snsLink
            snsName
            snsIcon {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="wrapper">
      <Layout>
        <SEO title="Top" />
        <ul className="listWrap" id="js-listWrap">
          {data.allContentfulSns.edges.map(({ node }) => (
            <li>
              <a href={node.snsLink} target="_blank" rel="noopener">
                <img src={node.snsIcon.fluid.src} alt={node.snsName} />
              </a>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  )
}

export default IndexPage
