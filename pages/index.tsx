import Banner from "@/components/Banner";
import Header from "@/components/Header";
import requests from "../utils/requests"
import { Movie } from "@/typings";
import Row from "@/components/Row";
import { error } from "console";
import Head from "next/head";


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
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow
}: Props) {
 
  return (
  <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
  
    <Head>
      <title>
        Home - Netflix
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    
    <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
      <Banner netflixOriginals={netflixOriginals} />
      <section className="md:space-y-24">
        <Row title="Trending Now" movies={trendingNow} />
        <Row title="Top Rated" movies={topRated} />
        <Row title="Action Thrilers" movies={actionMovies} />

        {/*My List*/}

        <Row title="Comedy" movies={comedyMovies} />
        <Row title="Horror Movies" movies={horrorMovies} />
        <Row title="Romance Movies" movies={romanceMovies} />
        <Row title="Documentaries" movies={documentaries} />
      </section>
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
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then(response => response.json()).catch((error:Error) => {console.error("originals:", error)}),
    fetch(requests.fetchTrending).then(response => response.json()).catch((error:Error) => {console.error("trending:", error)}),
    fetch(requests.fetchTopRated).then(response => response.json()).catch((error:Error) => {console.error("topRated:", error)}),
    fetch(requests.fetchActionMovies).then(response => response.json()).catch((error:Error) => {console.error("actionMovies:", error)}),
    fetch(requests.fetchComedyMovies).then(response => response.json()).catch((error:Error) => {console.error("comedyMovies:", error)}),
    fetch(requests.fetchHorrorMovies).then(response => response.json()).catch((error:Error) => {console.error("horrorMovies:", error)}),
    fetch(requests.fetchRomanceMovies).then(response => response.json()).catch((error:Error) => {console.error("romanceMovies:", error)}),
    fetch(requests.fetchDocumentaries).then(response => response.json()).catch((error:Error) => {console.error("documentaries:", error)})
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals?.results,
      trendingNow: trendingNow?.results,
      topRated: topRated?.results,
      actionMovies: actionMovies?.results,
      comedyMovies: comedyMovies?.results,
      horrorMovies: horrorMovies?.results,
      romanceMovies: romanceMovies?.results,
      documentaries: documentaries?.results,
    }
  }
}
