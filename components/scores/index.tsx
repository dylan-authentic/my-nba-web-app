export default function Scores({ games }: { games: Game[]}) {
    return (
        <div className="container-sm mx-4 md:mx-16 text-center lg:mb-16">
            <h1 className="font-bold text-left my-4 lg:text-center">Scores</h1>
            <table className="block whitespace-nowrap table-auto bg-gray-100 text-gray-500 text-sm md:text-base h-80 overflow-scroll rounded-lg text-center py-2 lg:inline-block">
                <thead>
                    <tr>
                        <th className="px-4 md:px-8">Season</th>
                        <th className="px-4 md:px-8">Home vs Visitor</th>
                        <th className="px-4 md:px-8">Type</th>
                        <th className="px-4 md:px-8">Home Score</th>
                        <th className="px-4 md:px-8">Visitor Score</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game: Game) => {
                        return (
                            <tr key={game.id}>
                                <td className="px-4 py-1 md:px-8">{game.season}</td>
                                <td className="px-4 py-1 md:px-8">{game.home_team.abbreviation} vs. {game.visitor_team.abbreviation}</td>
                                <td className="px-4 py-1 md:px-8">{game.postseason ? 'Playoffs' : 'Regular Season'}</td>
                                <td className="px-4 py-1 md:px-8">{game.home_team_score}</td>
                                <td className="px-4 py-1 md:px-8">{game.visitor_team_score}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
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