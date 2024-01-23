import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Github from './pages/Github'
import Navbar from './components/Navbar'
import Front from './pages/Front'
import Linkedln from "./pages/Linkedln"
import Twitter from './pages/Twitter'
import Instagram from './pages/Instagram'
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Outlet />
        </>
      ),
      children: [
        {
          path: '',
          element: <Github />
        },
        {
          path: '/front',
          element: <Front />
        },
        {
          path: '/linkedln',
          element: <Linkedln />
        },
        {
          path: '/twitter',
          element: <Twitter />
        },        {
          path: '/instagram',
          element: <Instagram />
        },
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App