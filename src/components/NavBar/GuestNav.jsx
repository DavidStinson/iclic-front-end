import { useAuth0 } from "@auth0/auth0-react"

const GuestNav = () => {
  const { loginWithRedirect } = useAuth0()

  return (         
    <ul>
      <li><button onClick={() => loginWithRedirect()}>Sign In</button></li>
    </ul> 
  )
}

export default GuestNav