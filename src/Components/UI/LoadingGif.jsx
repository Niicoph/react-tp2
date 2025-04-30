import Loading from '../../assets/Loading.gif'

export default function LoadingGif() {
  return (
    <div className="absolute h-screen w-screen flex justify-center items-center z-50 bg-white">
      <img src={Loading} alt="Loading" className="h-40 w-auto" />
    </div>
  )
}
