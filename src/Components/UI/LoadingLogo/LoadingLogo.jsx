import Loading from '../../../assets/logo.svg'
import Styles from './LoadingLogo.module.css';

export default function LoadingLogo() {
  return (
    <div className="absolute h-screen w-screen flex justify-center items-center z-50 bg-image">
      <img src={Loading} alt="Loading..." className={`${Styles.rotar_y}`}></img>
    </div>
  )
}
