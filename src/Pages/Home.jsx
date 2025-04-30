import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import Footer from '../Components/Footer/Footer';


export default function Home() {
  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-white'>
        <main className='flex flex-col items-center w-4/6 min-h-screen'>
            <Header />
            <Main />
            <Footer />
        </main>
    </div>
  )
}
