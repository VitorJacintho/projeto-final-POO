import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import{ createBrowserRouter, RouterProvider} from   "react-router-dom"

import Cadastrar from './routes/Cadastrar.jsx'
import PaginadeErro from './routes/PaginadeErro.jsx'
import Menu from './routes/Menu.jsx'
import Mental from './routes/Mental.jsx'
import Fisica from './routes/Fisica.jsx'
import Social from './routes/Social.jsx'
import Calendar from './routes/Calendar.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <PaginadeErro/>,
  },
  
  {
    path:'cadastrar',
    element: <Cadastrar/>,
  },
  {
    path:'menu',
    element: <Menu/>,
  },
  {
    path:'mental',
    element: <Mental/>,
  },
  {
    path:'fisica',
    element: <Fisica/>,
  },
  {
    path:'social',
    element: <Social/>,
  },
  {
    path:'calendar',
    element: <Calendar/>,
  },
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
