// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Person from './components/Person/Person';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Countries></Countries>
        <Person></Person>
        <Footer></Footer>
      {/* <Countries></Countries> */}
      
    </div>
  );
}


// function Countries() {

//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch('https://restcountries.com/v2/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])

//   return(
//     <div>
//       <h1>All Countries</h1>
//       <h2>Here available Countries:{countries.length}</h2>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital} population={country.population} 
//           numericcode={country.numericCode}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return (
//     <div>
//       <h2> Name: {props.name}</h2>
//       <p>Capital: {props.capital}</p>
//       <strong>Population :{props.population}</strong>
//       <p>numericCode: {props.numericcode}</p>
//     </div>
//   )
// }



export default App;
