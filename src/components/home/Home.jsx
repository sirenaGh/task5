import React from 'react'
import NavBar from '../navs/NavBar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-local bg-no-repeat bg-cover"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-photo/top-view-circular-frame-with-supplies_23-2148565104.jpg?w=2000')",
    }}>
      <NavBar header1="Learner"/>
      <div className="text-center mt-40">
      <h1 className="font-bold m-3 text-lg">Education is the Mother of<br/>Leadership</h1>
      <p>Another free template by Untree.co. Far far away,<br/>behind the word mountains,far from the countries<br/>Vokalia and Consnnantia,there live.</p>
     <Link to="./../../modules/courses/pages/CoursesList.jsx">
      <button className="mt-10 text-white  font-normal transition ease-in-out delay-150 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3 rounded-xl text-xs mb-48">EXPLORE COURSES</button>
      </Link>
      </div>
      </div>
  )
}

export default Home