// npm modules
import { Auth0Provider } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"


export const Auth0ProviderWithConfig = ({ children }) => {
  const navigate = useNavigate()

  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE
  const onRedirectCallback = appState => {
    navigate(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      onRedirectCallback={onRedirectCallback}
      redirectUri={window.location.origin}
      cacheLocation= 'localstorage'
    >
      {children}
    </Auth0Provider>
  )
}