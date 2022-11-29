import UserNav from "./UserNav"
import GuestNav from "./GuestNav"

const NavBar = ({ user }) => {
  return (
    <nav>{user ? <UserNav user={user} /> : <GuestNav /> }</nav>
  )
}

export default NavBar
