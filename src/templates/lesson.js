import React, { Component } from 'react';
import Layout from '../utils/layout';
import { compose } from 'recompose';
import {
    withAuthorization,
    // withEmailVerification,
} from '../utils/Session';

// MDX
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

// CodeBlock
import CodeBlock from "../components/molecules/CodeBlock";
import Highlighter from "../components/molecules/CodeBlock/Highlighter";
import { Link, navigate } from 'gatsby';

import { Row, Col } from "reactstrap";

const shortcodes = {
    CodeBlock,
    pre: props => <div {...props} />,
    code: Highlighter
}

const condition = authUser => !!authUser;

const LessonPageBase = ({ order, next, title, body, shortcodes, edges }) => {
    return (
        <div style={{ marginTop: 30 }} className="container-lg">
            <MDXProvider components={shortcodes}>
                <Row>
                    <Col sm="2">
                        <h5 style={{ color: 'gray' }}>Kursübersicht</h5>
                        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
                            {edges.map(({ node }, index) => (<li >
                                <Link style={index !== order ? { color: 'gray', fontSize: 'small' } : {
                                    fontSize: 'medium'
                                }} to={node.fields.slug}>{node.frontmatter.title.replace(/Codingeinheit\s\d\s-\s?/, '')}</Link>
                            </li>))}
                        </ul>

                    </Col>
                    <Col sm="10">
                        <h1>{title}</h1>
                        <MDXRenderer>{body}</MDXRenderer>
                        {next && <button className="btn btn-primary btn-lg" onClick={() => navigate(next)}>Weiter</button>}
                    </Col>
                </Row>
            </MDXProvider>
        </div>
    )
}

const LessonPage = compose(
    // withEmailVerification,
    withAuthorization(condition),
)(LessonPageBase);

export class Lesson extends Component {
    render() {
        const {
            pageContext: { title, body, id, order, next, edges },
        } = this.props;

        return (
            <Layout>
                <LessonPage
                    style={{ paddingRight: 10 }}
                    title={title}
                    body={body}
                    shortcodes={shortcodes}
                    order={order}
                    next={next}
                    edges={edges}
                />
            </Layout>
        );
    }
}
export const query = graphql`
  {
    allMdx(sort: {order: ASC, fields: frontmatter___order}) {
      edges {
        node {
          id
          frontmatter {
            title
            sidebar_label
            id
          }
          fileAbsolutePath
        }
      }
    }
  }
`

export default Lesson;
