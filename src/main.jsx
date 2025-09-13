import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
// import FoodLogo from './components/FoodLogo.jsx'
import Home from './components/Home.jsx'
// import Menu from './components/Menu.jsx'
import ContactUs from './components/FOOD.jsx'
import Bag from './components/Bag.jsx'
import Person from './components/Person.jsx'
import Sign from './components/Sign.jsx'
import { Provider } from 'react-redux'
import DataStore from './Store/Store.js'
import PageNotFound from './components/404Page.jsx'
import Gallery from './components/Gallery.jsx'
import Reviews from './components/Reviews.jsx'
const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      // { path: '/foodLogo', element: <FoodLogo /> },
      { path: '/', element: <Home /> },
      // { path: '/menu', element: <Menu /> },
      { path: '/food', element: <ContactUs /> },
      { path: '/bag', element: <Bag /> },
      { path: '/person', element: <Person /> },
      { path: '/sign', element: <Sign /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/reviews', element: <Reviews /> },
      { path: '*', element: <PageNotFound /> }

    ]
  }
],
 {
    basename: '/food-resepi-clone', // 👈 yaha add karo
  }
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={DataStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
