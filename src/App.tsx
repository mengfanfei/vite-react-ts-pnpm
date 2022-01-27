import {Outlet, useLocation} from 'react-router-dom'
import MyHeader from '@/components/MyHeader'

function App() {
  const location = useLocation()
  if (location.pathname === '/login') {
    return (
      <Outlet />
    )
  } else  {
    return (
      <>
        <MyHeader />
        <Outlet />
      </>
    )
  }
}

export default App
