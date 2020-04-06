import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

/** firebase */
import getFirebase, {FirebaseContext} from './Firebase';
import withAuthentication from './Session/withAuthentication';

const AppWithAuthentication = withAuthentication(({ children }) => (
  <>{children}</>
))

const Layout = props => {
  const [firebase, setFirebase] = useState(null)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    const app = import("firebase/app")
    const auth = import("firebase/auth")
    const database = import("firebase/database")

    Promise.all([app, auth, database]).then(values => {
      const fb = getFirebase(values[0])
      setFirebase(fb)
    })
  }, [])

  return (
    <>
      <FirebaseContext.Provider value={firebase}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>
            <AppWithAuthentication {...props} />
          </main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </FirebaseContext.Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
