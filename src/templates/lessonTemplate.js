import React, { useEffect } from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import CodeBlock from "../components/CodeBlock"
import { withFirebase } from "../components/Firebase"
import { Link } from "gatsby"

const shortcodes = { CodeBlock }

const MDXLayout = ({ id, title, body }) => (
  <>
    {" "}
    <h1>{title}</h1>
    <MDXProvider components={shortcodes}>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  </>
)

const Unauthed = () => (
  <>
    <h1>
      Sie muessen sich einloggen, damit Sie Zugriff auf diese Seite bekommen
    </h1>
    <Link to="/login">Login</Link>
  </>
)

const LessonTemplate = props => {
  console.log(props)
  const { authUser, pageContext } = props
  const { id, title, body } = pageContext

  useEffect(() => console.log('meh', authUser), [authUser])

  return (
    <Layout>
      {authUser ? (
        <MDXLayout id={id} title={title} body={body} />
      ) : (
        <Unauthed />
      )}
    </Layout>
  )
}

export default withFirebase(LessonTemplate)
