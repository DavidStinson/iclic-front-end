import { withAuthenticationRequired } from "@auth0/auth0-react"
import Loading from "../components/Loading/Loading";

const ProtectedRoute = ({ component, props }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <Loading />
      </div>
    )
  })

  return <Component {...props} />
}

export default ProtectedRoute
