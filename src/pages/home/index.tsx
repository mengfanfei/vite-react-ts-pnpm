import SvgIcon from '@/components/SvgIcon';
import HomeHeader from '@/pages/home/comp/home_header'

function Home() {
  return (
    <div className='home'>
      home
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