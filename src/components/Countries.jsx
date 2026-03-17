import React from 'react';
import { use } from 'react';
import Card from './Card'


const Countries = ({countriesPromise}) => {

    const countries = use(countriesPromise)

    const countriesInfo = countries.countries
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
            {
                countriesInfo.map(country => <Card key={country.ccn3?.ccn3} country = {country}/>)
            }
        </div>

        
    );
};

export default Countries;