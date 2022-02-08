import SvgIcon from '@/components/SvgIcon';
import HomeHeader from '@/pages/home/comp/home_header'
import { Dialog, Toast, ActionSheet, Button } from 'antd-mobile';
import { Action } from 'antd-mobile/es/components/action-sheet';
import { Context, createContext, Dispatch, useContext, useReducer, useState } from 'react';
import { defaultState, IState, reducer, Actions } from './store';

interface StyleContext {
  color: string
  fontSize?: number
}

export const MyContext: Context<StyleContext> = createContext({ color: '#111'})

interface IStoreContext {
  state: IState
  dispatch?: Dispatch<Actions>
}

export const StoreContext: Context<IStoreContext> = createContext({state: defaultState})

function Home() {
  const actions: Action[] = [
    { text: '复制', key: 'copy' },
    { text: '修改', key: 'edit' },
    {
      text: '删除',
      key: 'delete',
      onClick: async () => {
        const result = await Dialog.confirm({ content: '确定要删除吗？' })
        if (result) {
          Toast.show('执行了删除操作')
          setColor('red')
        }
      },
    },
  ]

  // React 假设当你多次调用useState时，你能保证每次渲染时调用它们的顺序不变
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('mengfanfei')
  const [num, setNum] = useState(0)
  const [color, setColor] = useState('red')

  const [state, dispatch] = useReducer(reducer, defaultState)


  return (
    <div className='home'>
      <Button color={'primary'} onClick={() => setVisible(true)}>事件处理</Button>
      <ActionSheet
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
        onAction={action => {
          if (action.key === 'edit' || action.key === 'copy') {
            Toast.show(`点击了${action.text}`)
          }
          setColor('green')
        }}
        afterClose={() => {
          Toast.show('动作面板已关闭')
        }}
      />
      <span className='font-bold'>home</span>
      <MyContext.Provider value={{ color: color}}>
        <StoreContext.Provider value={{state, dispatch}}>
          <HomeHeader />
        </StoreContext.Provider>
      </MyContext.Provider>
      <SvgIcon name="home-add"/>
      <SvgIcon name="data-chart"/>
      <SvgIcon name="data-money"/>
      <SvgIcon name="data-order"/>
      <SvgIcon name="data-people"/>
      <SvgIcon name="expand"/>
      <SvgIcon name="home-add" color="#8B81C3" style={{ width: '30px', height: '30px' }}/>
      <SvgIcon name="QQ" prefix="iconfont"/>
      <SvgIcon name="QQ" prefix="iconfont" style={{color: '#edaeda' }} />
      <SvgIcon name="QQ" prefix="iconfont" style={{fontSize: '30px' }} />
      <span>{name}</span>
      <span onClick={() => setNum(num + 1)}>{num}</span>
    </div>
  );
}

export default Home;