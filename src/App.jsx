import './App.css'
import {Routes,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/DashBoard';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  

  return (
    <> 
      <GoogleOAuthProvider clientId='663367823172-063a86n7ftjacuuh9mfh7b11vvppsksq.apps.googleusercontent.com' >
      <Routes>
          < Route path='/' element={<Login/>} />
          < Route path='/dashboard' element={<Dashboard/>} />
        </Routes> 
      </GoogleOAuthProvider>
       
    </>
  )
}

export default App
