export default function Navbar() {
    return (
        <div className="container-sm md:container rounded-lg bg-gray-800 shadow-md text-white mx-2 md:mx-auto mt-4  py-4">
            <h1 className="inline-block font-sans font-bold text-gray-300 text-xl pl-4 md:pl-8">My NBA Central 🏀</h1>
            <div className="float-right pr-4">
                <a className="pr-2" href="https://github.com/dylan-authentic/my-nba-web-app">Github</a>
                <a href="https://www.balldontlie.io/#introduction">API</a>
            </div>
        </div>
    )
}