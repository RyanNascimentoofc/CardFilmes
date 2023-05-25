import CardFilme from '@/Components/CardFilme'
import Header from '@/Components/Header'
import SecaoFilmes from '@/Components/SecaoFilmes'
import Titulo from '@/Components/Titulo'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const filmes=[
  {
  titulo: "Super Mario",
  nota: "8.9",
  poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/kzYbNJ4JaQiRny0cDi8a6bNX5w3.jpg"
  },
  {
    titulo: "A mãe",
    nota: "6.7",
    poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/5OeWHBMifiRPMz6eS23miS5ttED.jpg"
  },
  {
    titulo: "Sisu",
    nota: "7.6",
    poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/pnQYjDxqZ3C6reI8N0MfNi4NMkZ.jpg"
  },
  {
    titulo: "Homem formiga",
    nota: "9.7",
    poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/pDNT1gXhZEV1V70eCVmJAQNEqBl.jpg"
    }
]
export default function Home() {
  return (
  <>  
    <Header/>    
    <div>
      <img className='h-72 brightness-50 object-cover w-screen' src='https://www.themoviedb.org/t/p/original/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg'></img>
    </div>
    
    <main
      className={`flex min-h-screen flex-col justify-between p-24 ${inter.className}`}
    >
      <Titulo>Filmes em alta</Titulo>
      <div className='flex'>
      <SecaoFilmes filmes={filmes}/>      
      </div>

      <Titulo>Melhores dramas</Titulo>

      <Titulo>Séries em alta</Titulo>

      <Titulo>Lançamentos</Titulo>
      
    </main>
    </>
  )
}
