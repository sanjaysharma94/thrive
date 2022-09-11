import{ React , StrictMode}from 'react'
import ReactDOM  from 'react-dom'
import { createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import {store } from "../src/Redux/store"
import { Provider } from "react-redux"

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
    </StrictMode>
  
)
