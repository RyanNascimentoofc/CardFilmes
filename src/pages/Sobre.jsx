import Header from '@/Components/Header'

export default function Sobre() {
    return(
        <>
        <Header/>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl text-bold'>Sobre a R2 Filmes</h1>
            <p className='text-2xl'>Uma página para informar sobre filmes em alta...</p>
        </div>
        </>
    )
}