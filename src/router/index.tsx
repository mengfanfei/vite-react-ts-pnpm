import { HashRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import App from '../App'
const Home = React.lazy(() => import("@/pages/home"))
const Login = React.lazy(() => import("@/pages/login"))

function NoMatch() {
  return (
    <div>
      404
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
              <>loading...</>
            }>
              <Home />
            </React.Suspense>
          } />
          <Route path='login' element={
            <React.Suspense fallback={
              <>loading...</>
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