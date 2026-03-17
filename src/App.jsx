import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries';
import { useState } from 'react';
import Footer from './components/Footer';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

function App() {

  const [name, setName] = useState('');
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    const name = country.name?.common || "Unknown";

    if (!visitedCountries.includes(name)) {
      setVisitedCountries(prevCountry => [...prevCountry, name])

    }
  }
  // console.log(visitedCountries)

  return (
    <>
      <Suspense fallback={<h3 className='text-center'>helllo there....</h3>}>
        <Countries handleVisitedCountries={handleVisitedCountries} visitedCountries={visitedCountries} name={name} setName={setName} countriesPromise={countriesPromise} />
      </Suspense>

      {/* practicing lift up state- and i get it😁 */}
      <Footer name={name} />
    </>
  )

}

export default App
