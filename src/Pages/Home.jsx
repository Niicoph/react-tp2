import Header from '../Components/Header/Header';

export default function Home() {
  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-slate-200'>
        <main className='flex flex-col items-center w-4/6 min-h-screen'>
            <Header />
            {/* contenido */}
        </main>
    </div>
  )
}
