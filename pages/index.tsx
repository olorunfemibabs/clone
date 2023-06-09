import Banner from "@/components/Banner";
import Header from "@/components/Header";
import requests from "../utils/requests"
import { Movie } from "@/typings";


interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

export default function Home({
  netflixOriginals
}: Props) {
 
  return (
  <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
    
    <Header />
    <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
      <Banner netflixOriginals={netflixOriginals} />
      <section></section>
    </main>
  </div>
  )
}

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise?.all([
    fetch(requests.fetchNetflixOriginals).then(response => response.json()),
    fetch(requests.fetchTrending).then(response => response.json()),
    fetch(requests.fetchTopRated).then(response => response.json()),
    fetch(requests.fetchActionMovies).then(response => response.json()),
    fetch(requests.fetchComedyMovies).then(response => response.json()),
    fetch(requests.fetchHorrorMovies).then(response => response.json()),
    fetch(requests.fetchRomanceMovies).then(response => response.json()),
    fetch(requests.fetchDocumentaries).then(response => response.json())
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    }
  }
}
