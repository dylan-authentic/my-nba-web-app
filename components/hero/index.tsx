export default function Hero() {
    return (
        <div className="rounded-lg py-4 mx-4 mt-7 bg-gray-800 md:mx-16 md:h-96">
              <div className="grid h-auto md:grid-cols-2 md:h-full">
                <div className="md:m-4">
                  <h1 className="font-sans font-bold text-center text-gray-300 text-xl md:text-4xl md:py-32 xl:text-4xl">#MyNBATeams 🏀</h1>
                </div>
                <div className="bg-heroImage bg-cover bg-gray-500 m-4 rounded-lg h-48 md:h-80"></div>
              </div>
          </div>
    )
}