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
    return (
        <div className="rounded font-sans bg-gray-100 text-gray-500 mx-2 my-4 px-2 py-2 md:text-center">
            <div>
                <p className="font-medium text-sm">Team</p>
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