import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

const UserNav = ({ user }) => {
  const { logout } = useAuth0()
  return (
    <ul>
      <li>Welcome, {user.name}</li>
      <li><Link to="/profiles">Profiles</Link></li>
      <li>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Sign out
        </button>
      </li>
    </ul>
  )
}
 
export default UserNav;