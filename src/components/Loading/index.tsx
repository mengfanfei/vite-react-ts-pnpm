import loading from '@/assets/img/loading.gif'
const Loading = () => {
  return (
    <div className={'fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col items-center pt-20'}>
      <img src={loading} alt="" className='w-20' />
    </div>
  );
};

export default Loading;