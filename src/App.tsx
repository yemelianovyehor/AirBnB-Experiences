import { useState } from 'react';
import Navbar from '@components/Navbar/Navbar';
import Hero from '@components/Page/Hero';
import CardsScroll from '@components/Cards-scroll/CardsScroll';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="container">
        <Navbar />
        <Hero />
        <CardsScroll />
      </div>
  )
}

export default App
