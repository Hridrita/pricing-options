import { useState, Suspense } from 'react' 
import './App.css'
import Navbar from './components/DaisyNav/Navbar/Navbar'
import PricingOptions from './components/DaisyNav/PricingOptions/PricingOptions'
import ResultChart from './components/DaisyNav/ResultChart/ResultChart';
import axios from 'axios';
import MarksChart from './components/DaisyNav/MarksChart/MarksChart';


const pricingPromise = fetch('PricingData.json')
.then(res => res.json());

const marksPromise = axios.get('marksData.json');

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        
        <Suspense fallback={<span className="text-center font-bold text-2xl">Loading Pricing...</span>}>
          <PricingOptions pricingPromise={pricingPromise} />
        </Suspense>
      </main>

      <Suspense fallback={<span className="text-center font-bold text-2xl">Loading Pricing...</span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>

      <ResultChart></ResultChart>
    </>
  )
}

export default App