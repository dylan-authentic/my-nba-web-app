import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="container-sm md:container rounded-lg bg-gray-800 shadow-md text-white mx-2 md:mx-auto mt-4  py-4">
            <Link href='/'>
                <a>
                    <h1 className="inline-block font-sans font-bold text-gray-300 text-xl pl-4 md:pl-8">My NBA Teams 🏀</h1>
                </a>
            </Link>
            <div className="float-right pr-4 md:pr-12">
                <a className="pr-2 md:pr-12" href="https://github.com/dylan-authentic/my-nba-web-app">Github</a>
                <a href="https://www.balldontlie.io/#introduction">API</a>
            </div>
        </div>
    )
}