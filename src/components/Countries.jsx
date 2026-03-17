import React from 'react';
import { use } from 'react';
import Card from './Card'


const Countries = ({ countriesPromise, name, setName, handleVisitedCountries, visitedCountries }) => {


    console.log(visitedCountries)
    const countries = use(countriesPromise)

    
    const handleTrigger = () => {
        setName(name = "Minhaj")
    }

    const countriesInfo = countries.countries
    return (

        <>
            <section className=''>

                <div className="navbar bg-base-100 shadow-sm rounded-b-2xl">

                    <div className="flex-1 flex flex-col">
                        <h3 className="btn btn-ghost text-xl" > total country: {countriesInfo.length}</h3>
                        <h3 onClick={handleTrigger} className="btn btn-ghost text-xl">visited country: {visitedCountries.length}</h3>
                    </div>

                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
                {
                    countriesInfo.map(country => <Card handleVisitedCountries={handleVisitedCountries} name={name} key={country.ccn3?.ccn3} country={country} />)
                }
            </div>

        </>


    );
};

export default Countries;