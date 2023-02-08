import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import UsersPage from './pages/UsersPage'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/NavBar'
import UserPage from './pages/UserPages'
import DasdBoard from './pages/DasdBoard'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/users' element={<UsersPage/>} />
        <Route path='/usuarios' element={<Navigate to='/users'/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/users/:id' element={<UserPage/>} />
        
        <Route path='/dasdboard/*' element={<DasdBoard/>}>
          <Route path="welcome" element={<p>Welcome !!!!</p>} />
          <Route path="google" element={<p>Hi Google !!!!</p>} />
        </Route>
        
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </div>
  )
}

export default App
