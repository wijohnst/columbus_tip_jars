import { AuthContext } from 'src/contexts/auth-context'
import { useContext } from 'react'

export default function useAuth() {
  const auth = useContext(AuthContext)

  return {
    isLoggedIn: auth.loggedIn(),
    login: auth.login,
    logout: auth.logout,
    profile: auth.getProfile(),
    register: auth.register,
    setProfile: auth.setProfile,
    token: auth.token(),
  }
}
