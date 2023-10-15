import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import ErrorPage from '../ErrorPage'
import { Contacts } from '../pages/Contacts/Contacts'
import Home from '../pages/Home/Home'
import { Projects } from '../pages/Projects/Projects'
import App from '../App'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
      </Route>
    </Route>
  )
)

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     // loader: rootLoader,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/home' || '',
//         element: <Home />,
//         // loader: eventLoader,
//       },
//       {
//         path: '/projects',
//         element: <Projects />,
//         // loader: eventLoader,
//       },
//       {
//         path: '/contacts',
//         element: <Contacts />,
//         // loader: eventLoader,
//       },
//     ],
//   },
// ]);
