import React from "react"
//import {Link} from 'gatsby'
import SignOutButton from "../SignOut"

const Navigation = props => {
  console.log(props)
  return (
    <>
      <ul>
        <li>Login</li>
        {props.authUser && (
          <li>
            <SignOutButton />
          </li>
        )}
      </ul>
    </>
  )
}

export default Navigation
