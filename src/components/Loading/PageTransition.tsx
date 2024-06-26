import ReactLoading from 'react-loading'

export const PageTransition: React.FC = () => {
  return (
    <div className="fixed w-screen h-screen flex justify-center items-center" style={{ zIndex: 999999 }}>
      <ReactLoading type="bars" color="#71717a" width={100} height={100} />
    </div>
  )
}
