import SlideshowIcon from '@mui/icons-material/Slideshow';
import Link from 'next/link';

export default function header() {
    return(
        <header className='flex justify-between w-100 bg-slate'>
        <div className='flex m-4 text-amber-400'>
            <Link href='/'>
            <SlideshowIcon className='text'/>
            <h1>R2 Filmes</h1>
            </Link>
          </div>
    
          <Link className='m-4' href='/Sobre'>Sobre</Link>
        </header>
    )
}