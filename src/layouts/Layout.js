import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=PT+Serif|Roboto&display=swap"
          rel="stylesheet"
        />
        <script src={"/jquery-3.4.1.min.js"}></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script src={"/bootstrap-4.4.1-dist/js/bootstrap.min.js"}></script>
        <script
          src="https://kit.fontawesome.com/7c87fa191a.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
