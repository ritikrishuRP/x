import { Route, Routes } from "react-router-dom"
import LogInPage from "./pages/auth/login/LogInPage"
import SignUpPage from "./pages/auth/signup/SignUpPage"
import HomePage from "./pages/home/HomePage"
import Sidebar from "./components/common/SideBar"


function App() {


  return (
    <div className='flex max-w-6xl mx-auto'>
      <Sidebar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LogInPage />} />
    </Routes>
  </div>
  )
}

export default App
