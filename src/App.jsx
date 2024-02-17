import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pageone from './Components/Pages/Pageone';
import Pagetwo from './Components/Pages/Pagetwo';
import Pagethree from './Components/Pages/Pagethree';
import { EmblaCarousel } from './Components/Pages/Embleslide';
import Pagefour from './Components/Pages/Pagefour';
import Pagefive from './Components/Pages/Pagefive';





function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
     <Pageone />
     <Pagetwo />
     <Pagethree />
     <EmblaCarousel />
     <Pagefour />
     <Pagefive />
    </div>
  )
}

export default App
