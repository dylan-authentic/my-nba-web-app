import { GetStaticProps, GetStaticPaths } from 'next'
import axios from 'axios'
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import Scores from '../../components/scores';

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get('https://www.balldontlie.io/api/v1/teams')
    let pathsArr = []
    res.data.data.forEach((item) => {
        pathsArr.push({ params: { slug: item.id.toString() }})
    })
    return { 
        paths: pathsArr,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const game = await axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${params.slug}`)
    const team = await axios.get(`https://www.balldontlie.io/api/v1/teams/${params.slug}`)
    return {
        props: {
            game: game.data,
            team: team.data
        }
    }
}

export default function Team({ game, team }: TeamProps) {
    console.log(game)
    console.log(team)
    return (
        <>
            <Navbar />
            <Hero team={team}/>
            <Scores games={game.data} />
        </>
    )
}

type Game = {
    id: number,
    date: string,
    home_team_score: number,
    visitor_team_score: number,
    season: number,
    period: number,
    status: string,
    time: string,
    postseason: boolean,
    home_team: {
      id: number,
      abbreviation: string,
      city: string,
      conference: string,
      division: string,
      full_name: string,
      name: string
    },
    visitor_team: {
      id: number,
      abbreviation: string,
      city: string,
      conference: string,
      division: string,
      full_name: string,
      name: string
    }
}

type Team = {
    id: number,
    abbreviation: string,
    city: string,
    conference: string,
    division: string,
    full_name: string,
    name: string
  }

type GameData = {
    data: Game[],
    meta: {
        total_pages: number,
        current_page: number,
        next_page: number,
        per_page: number,
        total_count: number
      }
}

type TeamProps = {
    game: GameData,
    team: Team
}