import {Outlet, useLocation} from 'react-router-dom'
import MyHeader from '@/components/MyHeader'
// import { useEffect } from 'react'
// import { wxConfig } from '@/utils/wxUtils'

function App() {
  const location = useLocation()

  // 获取微信配置信息，模拟componentDidMount, 只运行一次
  // useEffect(() => {
  //   wxConfig()
  // }, [])

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
