import React from 'react';
import './Country.css'

const Country = (props) => {

    const {name, flags, capital, population } = props.country;
    console.log(props.country);

    return (
        <div className="country bg-success">
            <h2>Country Name: {name}</h2>
            <img src={flags[1]} alt="" />
            <p>Capital: {capital}</p>
            <strong>Population :{population}</strong>
        </div>
    );
};

export default Country;