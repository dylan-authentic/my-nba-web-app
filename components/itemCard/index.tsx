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
  
export default function ItemCard({ team }: { team: Team }) {
    const TeamLogo = NBAIcons[team.abbreviation]

    return (
        <div className="rounded font-sans bg-gray-100 text-gray-500 mx-2 my-4 px-2 py-2 text-center transition transform hover:-translate-y-2 duration-200">
            {/* <TeamLogo size={60} style={{display: 'inline-block'}} /> */}
            <div>
                <p className="font-medium text-sm rounded-full bg-gray-800 my-1 inline-block py-1 px-5 text-white">Team</p>
                <h1 className="font-bold ">{team.name}</h1>
            </div>
            <div className="pt-2">
                <p className="font-medium text-sm">City</p>
                <h1 className="font-bold ">{team.city}</h1>
            </div>
            <div className="pt-2">
                <p className="font-medium text-sm">Conference</p>
                <h1 className="font-bold ">{team.conference}</h1>
            </div>
        </div>
    )
}