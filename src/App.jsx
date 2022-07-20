import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'
import UserMessage from './components/UserMessage/UserMessage'


function App() {
  return (

    <>
      <Navbar />
      <AppRoutes />
      <UserMessage />
    </>
  )
}

export default App
