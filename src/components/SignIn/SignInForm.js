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

const onSubmit = event => {
  event.preventDefault()
  console.log("submitted")
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

const SignInForm = () => {

  const query = async () => {
    const data = await useStaticQuery(graphql`
      query LoginImageQuery {
        allImageSharp(
          filter: { id: { eq: "11111d8d-f44e-555c-a95b-2b2948cb0eca" } }
        ) {
          edges {
            node {
              id
              fluid(jpegQuality: 10) {
                src
              }
            }
          }
        }
      }
    `)
    return data.allImageSharp.edges[0].node.fluid.src
  }

  const classes = useStyles({ image: query().catch(console.error) });
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Anmeldung
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Adresse"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Passwort"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Anmeldung speichern"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onSubmit={onSubmit}
            >
              Anmelden
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Passwort vergessen?
                </Link>
              </Grid>
              <Grid item></Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default SignInForm
