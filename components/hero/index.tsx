import * as NBAIcons from 'react-nba-logos';

type Team = {
  id: number,
  abbreviation: string,
  city: string,
  conference: string,
  division: string,
  full_name: string,
  name: string
}

type HeroProps = {
  home?: boolean,
  team?: Team
}

export default function Hero({ home, team }: HeroProps) {
    let TeamLogo;
    if(!home) TeamLogo = NBAIcons[team.abbreviation]

    return (
      <>
      {home ? 
        <div className="rounded-lg py-4 mx-4 mt-4 bg-gray-800 md:mx-16 md:h-96">
            <div className="grid h-auto md:grid-cols-2 md:h-full">
              <div className="md:m-4">
                <h1 className="font-sans font-bold text-center text-gray-300 text-xl md:text-4xl md:py-32 xl:text-4xl">Home</h1>
              </div>
              <div className="bg-heroImage bg-cover bg-gray-500 m-4 rounded-lg h-48 md:h-80"></div>
            </div>
        </div>
        : 
        <div className="rounded-lg py-4 mx-4 mt-4 bg-gray-800 md:mx-16 md:h-96">
            <div className="grid h-auto md:grid-cols-2 md:h-full">
              <div className="md:m-4">
                <h1 className="font-sans font-bold text-center text-gray-300 text-xl md:text-4xl md:py-32 xl:text-4xl">{team.full_name}</h1>
                <h3 className="text-center text-white">{team.conference} - {team.division}</h3>
              </div>
              <div className="bg-gray-500 m-4 rounded-lg h-48 md:h-80">
                <TeamLogo size={200}/>
              </div>
            </div>
        </div>
      }
      </>
    )
}