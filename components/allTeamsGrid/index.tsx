import ItemCard from "../itemCard";

type Team = {
    id: number,
    abbreviation: string,
    city: string,
    conference: string,
    division: string,
    full_name: string,
    name: string
  }

export default function AllTeamsGrid({ teams }: { teams: Team[] }) {
    return (
        <div className="container mx-auto px-5 py-5 md:px-20">
            <h2 className="font-bold ">Select a team</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3"> 
                {teams.map((team: Team) => {
                    return (
                        <ItemCard key={team.id} team={team} />
                    )
                })}
            </div>
        </div>
    );
}