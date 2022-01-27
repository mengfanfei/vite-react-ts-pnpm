import { HashRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import App from '../App'
import Loading from '@/components/Loading'
const Home = React.lazy(() => import("@/pages/home"))
const Login = React.lazy(() => import("@/pages/login"))

function NoMatch() {
  return (
    <div className='text-center pt-10 font-semibold text-gray-400'>
      似乎这个页面并不存在
    </div>
  )
}

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
          <Route index element={
            <React.Suspense fallback={
              <Loading />
            }>
              <Home />
            </React.Suspense>
          } />
          <Route path='login' element={
            <React.Suspense fallback={
              <Loading />
            }>
              <Login />
            </React.Suspense>
          } />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRouter