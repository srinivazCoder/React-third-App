import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext from './Context.jsx'
import ReducerBasic from './starter/1.useReducer.jsx'
import LowerState from './starter/01-lower-state.jsx'
import LowerStateChallenge from './starter/02-lower-state-challenge.jsx'
import ReducerCURD from './starter/ReducerCURD.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode >
    <AppContext >

    {/* <App /> */}
    {/* <ReducerCURD/> */}
    

    <ReducerBasic />

    <LowerState/>

    <LowerStateChallenge/>

    </AppContext>
  // </React.StrictMode>,
)
