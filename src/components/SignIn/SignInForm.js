import React, { useEffect, useState, useContext } from "react"

/** Material UI **/
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

/** Gatsby **/
import { navigate, graphql, useStaticQuery } from "gatsby"

/** Firebase **/
import { withFirebase } from "../Firebase"
import FirebaseContext from '../Firebase'

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

const SignInForm = props => {
  let classes = useStyles()
  const [img, setImg] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [_initFirebase, setInitFirebase] = useState(false)

  const firebase = useContext(FirebaseContext)

  // Getting the proper image from gatsby
  const data = useStaticQuery(graphql`
    query LoginImageQuery {
      allFile(filter: { id: { eq: "0db7c53a-6870-567d-bde0-ccdde3508dcf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  // intialize firebase
  const firebaseInit = () => {
    if (firebase && !_initFirebase) {
      setInitFirebase(true)
      initialRequest()
    }
  }

  // FIXME redundant?
  const initialRequest = () => {}

  const onSubmit = event => {
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("")
        setPassword("")
        navigate("/lessons/intro")
      })
      .catch(error => setError(error))
    event.preventDefault()
  }

  // handlers
  const handleEmailField = event => setEmail(event.target.value)
  const handlePasswordField = event => setPassword(event.target.value)

  // initial hook
  useEffect(() => {
    // setting image url
    const imgUrl = data.allFile.edges[0].node.publicURL
    setImg(imgUrl)

    // init firebase
    firebaseInit()
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
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Anmeldung
          </Typography>
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
              onChange={handleEmailField}
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
              onChange={handlePasswordField}
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
              onClick={onSubmit}
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
          {error && console.log(error)}
          {error && <p>{error.message}</p>}
        </div>
      </Grid>
    </Grid>
  )
}

export default SignInForm
