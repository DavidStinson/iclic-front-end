// npm modules
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

// app pages
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'

// app components
import NavBar from './components/NavBar/NavBar'
import Loading  from './components/Loading/Loading'

// helpers
import ProtectedRoute from './helpers/ProtectedRoute'

// services

const App = () => {
  const { isLoading, user } = useAuth0()

  if (isLoading) {
    return <Loading />
  }

  const testProp = "my test prop"

  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={<ProtectedRoute 
            component={Profiles} 
            props={{
              testProp: testProp
            }} 
          />}
        />
      </Routes>
    </>
  )
}

export default App
