import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import NavBar from './components/NavBar/Navbar'
import AppRoutes from './routes/AppRoutes'
import UserMessage from './components/UserMessage/UserMessage'


function App() {
  return (

    <>
      <NavBar />
      <AppRoutes />
      <UserMessage />
    </>
  )
}

export default App
