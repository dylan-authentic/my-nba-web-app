import Head from 'next/head'
import { GetStaticProps } from 'next'
import axios from 'axios'
import Hero from '../components/hero'
import AllTeamsGrid from '../components/allTeamsGrid'
import Navbar from '../components/navbar'

type Team = {
  id: number,
  abbreviation: string,
  city: string,
  conference: string,
  division: string,
  full_name: string,
  name: string
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('https://www.balldontlie.io/api/v1/teams');
  return {
      props: {
          teams: res.data.data,
          data: res.data
      },
  }
}

export default function Home({ teams }: { teams: Team[] }) {
  return (
    <div>
      <Head>
        <title>My NBA Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
          <Navbar />
          <Hero />
          <AllTeamsGrid teams={teams} />
        </main>
      <footer></footer>
    </div>
  )
}
