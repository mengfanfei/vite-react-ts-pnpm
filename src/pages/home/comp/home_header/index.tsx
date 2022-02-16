import { Button } from 'antd-mobile'
import { useContext } from 'react'
import { MyContext, StoreContext } from '../..'


const HomeHeader = () => {
  const context = useContext(MyContext)
  const { state, dispatch } = useContext(StoreContext)

  return (
    <div style={{ color: context.color, fontSize: context.fontSize }}>
      home_header components
      <div>
        使用useContext,useReducer实现状态管理：
        <p>姓名：{state.name}</p>
        <p>年龄：{state.age}</p>
        <Button color="success" onClick={() => dispatch && dispatch({ type: 'SET_AGE' })}>修改年龄</Button>
        <Button color="danger" onClick={() => dispatch && dispatch({ type: 'SET_NAME', name: '小蛋糕' })}>修改姓名</Button>
      </div>
    </div>
  )
}

export default HomeHeader