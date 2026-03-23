import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
 import App from './App.jsx'

// function Car(props) {
//   return (
//     <>
//       <h2>My favorite car is a {props.c1.name} {props.c1.model}!</h2>
//       <p>But it has to from {props.years[0]}, {props.years[1]}, or {props.years[2]}.</p>
//     </>
//   );
// }

// let x = [1964, 1965, 1966];
// let y = {name: "Ford", model: "Mustang"};


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
