import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { brindha } from './app/store.js'
createRoot(document.getElementById('root')).render(

 <Provider store={brindha}>
       <App />
 </Provider>
    
  
)
