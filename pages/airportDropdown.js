import React from 'react';

const AirportDropdown = ({value, onChange, name}) => {
  const airports = [
    "Select Airport",
    "IST",
    "JKT",
    "JFK",
    "LAX",
    "ORD",
    "SFO",
    "DXB",
  ]
  return (
    <label
    htmlFor="large-input" 
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {name}
      <select
      className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      value={value} 
      onChange={onChange}>
        {airports.map(airport => (
          <option value={airport} key={airport}>
            {airport}
          </option>
        ))}
      </select>
    </label>
  );
}

export default AirportDropdown;