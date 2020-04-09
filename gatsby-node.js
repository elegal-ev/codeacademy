const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const firebase = require('firebase');
const routes = require('./templates.js');
const config = require('./firebaseConfig');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value: `/lesson${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const app = firebase.initializeApp(config);

  await Promise.all(
    routes.map(
      async ({
        collection,
        path: routePath,
        param,
        fileName,
        context,
      }) => {
        const Template = path.resolve(
          `./src/templates/${fileName}.js`,
        );
        await app
          .firestore()
          .collection(collection)
          .get()
          .then(async (querySnapshot) => {
            await Promise.all(
              querySnapshot.docs.map(async (item) => {
                const itemData = item.data();
                await createPage({
                  path: `${routePath}/${itemData[param]}`,
                  component: Template,
                  context: context.reduce((acc, curr) => {
                    acc[curr] = itemData[curr];
                    return acc;
                  }, {}),
                });
              }),
            );
          });
      },
    ),
  );

  const result = await graphql(`
    query {
      allMdx(sort: { order: ASC, fields: frontmatter___order }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              order
            }
            body
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    const n = posts[node.frontmatter.order + 1]
    const next = n ? n.node.fields.slug : null
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/lesson.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        title: node.frontmatter.title,
        body: node.body,
        order: node.frontmatter.order,
        next,
        edges: posts
      },
    });
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  routes.forEach((item) => {
    const regex = new RegExp(`${item.path}`, 'g');
    if (page.path.match(regex)) {
      page.matchPath = `${item.path}/*`;
      // Update the page.
      createPage(page);
    }
  });
};
