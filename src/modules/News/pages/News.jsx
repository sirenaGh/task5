import React from 'react'
import Card from '../components/Card'
import Pic1 from './../../../assets/12.jpg'
import Pic2 from './../../../assets/13.jpg'
import Pic3 from './../../../assets/14.jpg'
import Pic4 from './../../../assets/15.jpg'
import Pic5 from './../../../assets/16.jpg'
import Pic6 from './../../../assets/img5.jpg'

function News() {
  return (
    
    <div className='grid grid-cols-2 gap-2 m-16 '>
        <Card img={Pic1} title={"Education for Tomorrow's Leaders"}/>
        <Card img={Pic2} title={"Enroll Your Kids This Summer to get 30% off"}/>
        <Card img={Pic3} title={"Education for Tomorrow's Leaders"}/>
        <Card img={Pic4} title={"Enroll Your Kids This Summer to get 30% off"}/>
        <Card img={Pic5} title={"Education for Tomorrow's Leaders"}/>
        <Card img={Pic6} title={"Enroll Your Kids This Summer to get 30% off"}/>
</div>
  )
}

export default News