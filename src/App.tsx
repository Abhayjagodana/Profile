
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Header from './Pages/Header'
import Home from './Pages/Home'
// import About from './Pages/About'
import Skill from './Pages/Skill'
import Contact from './Pages/Contact'


import Eduction from './Pages/Education'
import React, { Suspense ,lazy} from 'react'

const About = lazy(() => import("./Pages/About"));

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
       <Suspense fallback={<div>Loading About Page...</div>}>
        <About />
      </Suspense>
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
