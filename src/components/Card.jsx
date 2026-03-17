import React from 'react';
import { useState } from 'react';

const Card = ({ country }) => {

    // 1. Basic Info
    const name = country.name?.common || "Unknown";
    // const ccn3 = country.ccn3?.ccn3;
    const region = country.region?.region;
    const area = country.area?.area;
    const population = country.population?.population;
    const continent = country.continents?.continents?.[0];

    // 2. Fix the typo: 'flags' instead of 'glags'
    const flagImg = country.flags?.flags?.png;
    const flagAlt = country.flags?.flags?.alt;

    // 3. Fix Language: Get the first language available (not just 'eng')
    // const langKeys = Object.keys(country.languages?.languages || {});
    // const language = country.languages?.languages[langKeys[0]] || "N/A";

    // 4. Fix Currency: Get the first currency available (don't hardcode JMD)
    const currKeys = Object.keys(country.currencies?.currencies || {});
    const currencyName = country.currencies?.currencies[currKeys[0]]?.name || "N/A";

    // console.log(name, ccn3, language, currencyName);

    const [state, setState] = useState(true);

    const eventHandler = () => {
        setState(!state)
    }

    return (
        <div className="card h-full flex flex-col justify-between w-80 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200">
            <div>
                <figure className="px-4 pt-4">
                    <img
                        src={flagImg}
                        alt={flagAlt}
                        className="rounded-xl h-40 w-full object-cover"
                    />
                </figure>

                <div className="card-body p-6 mb-2">
                    {/* 2. FIX: Use the 'name' variable directly */}
                    <h2 className="card-title text-2xl font-bold text-primary">{name}</h2>
                    <span className="badge badge-ghost badge-sm">{continent}</span>
                </div>

            </div>

            <div className="card-body p-6 flex flex-col justify-between">

                <div className="">

                    <div className='grid grid-cols-2 gap-y-3 text-sm'>
                        <div>
                            <p className="text-gray-400 uppercase text-xs font-semibold">Population</p>
                            <p className="font-medium">{(population / 1000000).toFixed(1)}M</p>
                        </div>
                        <div>
                            <p className="text-gray-400 uppercase text-xs font-semibold">Region</p>
                            <p className="font-medium">{region}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 uppercase text-xs font-semibold">Currency</p>
                            <p className="font-medium">{currencyName}</p>
                        </div>
                        <div>
                            {/* 3. FIX: Add a check to prevent errors if area is missing */}
                            <p className="text-gray-400 uppercase text-xs font-semibold">Area</p>
                            <p className="font-medium">{area?.toLocaleString()} km²</p>
                        </div>
                    </div>

                </div>

                <div className="card-actions mt-4 ">
                    <button onClick={eventHandler} className="btn btn-primary btn-block btn-sm"> {state ? "Learn More": "nothing to learn"}</button>
                </div>

            </div>
        </div>
    );
};

export default Card;