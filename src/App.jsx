import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import NavBar_ from './components/NavBar_/NavBar_'
import AppRoutes from './routes/AppRoutes'
import UserMessage from './components/UserMessage/UserMessage'


function App() {
  return (

    <>
      <NavBar_ />
      <AppRoutes />
      <UserMessage />
    </>
  )
}

export default App
