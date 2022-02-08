import React from 'react'
import ReactDOM from 'react-dom'
import '@/assets/styles/index.css' // 全局样式表
import 'virtual:svg-icons-register'
import '@/assets/iconfont/iconfont.css'
import AppRouter from '@/router'

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
)
