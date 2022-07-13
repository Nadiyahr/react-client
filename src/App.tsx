import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Home from './pages/home'
import LogIn from './pages/login'
import LogUp from './pages/logup'

const PrivateRoutes = () => {
  const isAuth = false
  return <>{isAuth ? <Outlet /> : <Navigate to='/login' />}</>
}

const RestrictedRoutes = () => {
  const isAuth = false
  return <>{!isAuth ? <Outlet /> : <Navigate to='/dashboard' />}</>
}

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<PrivateRoutes />} >
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      <Route element={<RestrictedRoutes />} >
        <Route path='/login' element={<LogIn />} />
      </Route>
        <Route path='/logup' element={<LogUp />} />
    </Routes>
  )
}

export default App
