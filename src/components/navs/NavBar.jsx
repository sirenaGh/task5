import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
function NavBar({header1}) {
  return (
    <div className="mt-10">
      <BrowserRouter>
    <nav>
        <ul className="flex m-10  font-semibold space-x-12 text-lg">
            <h1 className="mr-52 font-bold text-xl">{header1}</h1>
          <Link to={"/HomePage"}>  <li>Home</li></Link>
            <li>Dropdown</li>
            <li>Our Stuff</li>
          <Link to={"/News"}>  <li>News</li></Link>
            <li>Gallery</li>
          <Link to={"/About"}>  <li>About</li></Link>
            <li>Contact</li>
            <button className=" text-white  font-normal transition ease-in-out delay-150 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3 rounded-xl text-xs">ENROLL NOW</button>
         </ul>
    </nav>
    </BrowserRouter>
    </div>
  )
}

export default NavBar