import SvgIcon from '@/components/SvgIcon';
import HomeHeader from '@/pages/home/comp/home_header'
import { Dialog, Toast, ActionSheet, Button } from 'antd-mobile';
import { useState } from 'react';
import { Action } from 'antd-mobile/es/components/action-sheet'

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
        }
      },
    },
  ]
  const [visible, setVisible] = useState(false)
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
        }}
        afterClose={() => {
          Toast.show('动作面板已关闭')
        }}
      />
      <span className='font-bold'>home</span>
      <HomeHeader />
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

    </div>
  );
}

export default Home;