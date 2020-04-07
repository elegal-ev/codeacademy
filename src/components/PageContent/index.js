import React, { useEffect, useState } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import { graphql, useStaticQuery } from "gatsby"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="https://www.xn--elegal-gttingen-gtb.de/">
        eLegal Göttingen e.V.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  image: props => ({
    backgroundImage: `url("${props.image}")`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  }),
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Picture = props => {
  const classes = useStyles(props)
  return (
    <>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </>
  )
}

// TODO make reusable
const PageContent = ({ title }) => {
  let classes = useStyles()
  const [img, setImg] = useState(null)

  const data = useStaticQuery(graphql`
    query NotFoundImageQuery {
      allFile(filter: { id: { eq: "664e1dd7-2de3-5529-838e-e27e3bc76e7e" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  useEffect(() => {
    const imgUrl = data.allFile.edges[0].node.publicURL
    setImg(imgUrl)
  }, [])

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {img ? (
        <Picture image={img} />
      ) : (
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      )}
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  )
}

export default PageContent
export { Copyright }
