import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../components/layout'
import CodeBlock from "../components/CodeBlock"

const shortcodes = { CodeBlock }

const LessonTemplate = ({pageContext: {id, title, body}})  => (
  <>
    <Layout>
      <h1>{title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  </>
)

export default LessonTemplate
