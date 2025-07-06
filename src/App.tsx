
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Header from './Pages/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Skill from './Pages/Skill'
import Contact from './Pages/Contact'
import Eduction from './Pages/Education'

const router = createBrowserRouter([
  {

    path: "/",
    element:
      <div>
        <Header></Header>
        <Home></Home>
      </div>
  },
  {

    path: "/About",
    element:
      <div>
        <Header></Header>
        <About></About>
      </div>
  },
   {

    path: "/Skill",
    element:
      <div>
        <Header></Header>
       <Skill></Skill>
      </div>
  },
  {

    path: "/Contact",
    element:
      <div>
        <Header></Header>
       <Contact></Contact>
      </div>
  },
  {

    path: "/Education",
    element:
      <div>
        <Header></Header>
       <Eduction></Eduction>
      </div>
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
