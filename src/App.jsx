import { useState, Suspense } from 'react' 
import './App.css'
import Navbar from './components/DaisyNav/Navbar/Navbar'
import PricingOptions from './components/DaisyNav/PricingOptions/PricingOptions'
import ResultChart from './components/DaisyNav/ResultChart/ResultChart';


const pricingPromise = fetch('PricingData.json')
.then(res => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        
        <Suspense fallback={<div className="text-center font-bold text-2xl">Loading Pricing...</div>}>
          <PricingOptions pricingPromise={pricingPromise} />
        </Suspense>
      </main>

      <ResultChart></ResultChart>
    </>
  )
}

export default App