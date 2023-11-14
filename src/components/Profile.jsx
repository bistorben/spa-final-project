import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import './Profile.css'


const Profile = () => {

const auth = useAuth()
const navigate = useNavigate()

const handleLogout = ()=>{
  auth.logout()
  navigate("/")
}
  return (
    <>
    <h1>Welcome {auth.user}</h1>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Profile;