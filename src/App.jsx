import { useState } from 'react'

import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/DaisyNav/Navbar/Navbar'
import Pricing from './components/DaisyNav/Navbar/PricingOptions/Pricing'
import PricingOptions from './components/DaisyNav/PricingOptions/PricingOptions'

function App() {
  const [count, setCount] = useState(0)

  const pricingPromise = fetch('pricingData.json')
  .then (res => res.json())

  return (
    <>

      <header>
        <Navbar></Navbar>
         
         <main>
          <Suspanse fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <PricingOptions pricingPromise={pricingPromise}></PricingOptions>

        </Suspanse>
         </main>
        
        
      </header>



    </>
  )
}

export default App
