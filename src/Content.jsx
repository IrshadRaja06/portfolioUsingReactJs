import React from 'react'
import Bcard from './Bcard'
import k from './assets/K.R.Fashion.png'
import Bike from './assets/Bike Service.png'
import TicTacToe from './assets/tic tac toe.png'

const Content = () => {
  return (
    <div className='text-white'>
      <Bcard title='K.R.Fashion' img={k} p='Explore KR Fashion for a straightforward and efficient online shopping experience.Built using Angular and NestJS frameworks for a smooth user experience.Supported by a robust PostgreSQL database for secure and reliable transactions.
Browse our diverse range of fashion items with ease, backed by secure payments and prompt delivery. Shop confidently with KR Fashion' link='https://irshadraja06.github.io/k.r.fashion/' github='https://github.com/IrshadRaja06/Angular'/>
      <Bcard title='Bike Service' img={Bike} p="'Keep your bike running smoothly with our expert service. Regular maintenance ensures safety and extends your bike's lifespan. Our team provides top-notch repairs, tune-ups, and inspections. From brake adjustments to tire checks, we've got you covered. Trust us for quick, reliable service at competitive prices. Ride worry-free with our comprehensive care. Book your bike service today!'" link='https://bike-service-coral.vercel.app/' github='https://github.com/IrshadRaja06/bike-service'/>
      <Bcard title='Bike Service' img={TicTacToe} p='"Create a classic Tic Tac Toe game using HTML for structure, CSS for styling and alignment, and JavaScript for game logic and interactivity. Players take turns marking Xs and Os on a 3x3 grid, with the goal of aligning three symbols in a row, column, or diagonal to win. The game tracks turns, detects wins or draws, and resets for new games, offering a clean and responsive design."' link='https://irshadraja06.github.io/tic-tac-toe/' github='https://github.com/IrshadRaja06/tic-tac-toe'/>
    </div>
  )
}

export default Content
